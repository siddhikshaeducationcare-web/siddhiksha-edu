import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const INSTITUTION_EMAIL = process.env.INSTITUTION_EMAIL || "siddhikshaeducationcare@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      student_name,
      parent_name,
      mobile_number,
      email,
      school_name,
      standard,
      board,
      additional_notes,
    } = body;

    // Validate required fields
    if (!student_name || !parent_name || !mobile_number || !email || !school_name || !standard || !board) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 });
    }

    // Save to Supabase
    const supabase = createAdminClient();
    const { data: admission, error: dbError } = await supabase
      .from("admissions")
      .insert({
        student_name,
        parent_name,
        mobile_number,
        email,
        school_name,
        standard,
        board,
        additional_notes: additional_notes || null,
        status: "pending",
      })
      .select()
      .single();

    if (dbError) {
      console.error("DB Error:", dbError);
      return NextResponse.json({ error: "Failed to save admission" }, { status: 500 });
    }

    // Send email to institution
    await resend.emails.send({
      from: "Siddhiksha Education Care <onboarding@resend.dev>",
      to: INSTITUTION_EMAIL,
      subject: `New Admission Enquiry — ${student_name} (${standard}, ${board})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #1d4ed8); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Admission Enquiry</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Siddhiksha Education Care</p>
          </div>
          <div style="padding: 30px; background: white; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ["Student Name", student_name],
                ["Parent Name", parent_name],
                ["Mobile Number", mobile_number],
                ["Email", email],
                ["School Name", school_name],
                ["Standard", standard],
                ["Board", board],
                ["Additional Notes", additional_notes || "None"],
              ]
                .map(
                  ([key, value]) => `
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="padding: 12px 8px; color: #6b7280; font-size: 14px; width: 40%;">${key}</td>
                  <td style="padding: 12px 8px; color: #111827; font-weight: 500; font-size: 14px;">${value}</td>
                </tr>`
                )
                .join("")}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #f0f9ff; border-radius: 8px; border: 1px solid #bae6fd;">
              <p style="margin: 0; color: #0369a1; font-size: 14px;">
                📋 This admission request has been saved in the admin dashboard. 
                Please follow up with the parent within 24 hours.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation to parent
    await resend.emails.send({
      from: "Siddhiksha Education Care <onboarding@resend.dev>",
      to: email,
      subject: "Admission Enquiry Received — Siddhiksha Education Care",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #1d4ed8); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Thank You, ${parent_name}!</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Your admission enquiry has been received.</p>
          </div>
          <div style="padding: 30px; background: white; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="color: #374151; line-height: 1.7;">
              Dear <strong>${parent_name}</strong>,<br><br>
              We are delighted to receive your admission enquiry for <strong>${student_name}</strong> 
              (${standard} — ${board}). Our team will review your application and contact you 
              within <strong>24 hours</strong>.
            </p>
            
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 20px 0;">
              <p style="margin: 0; color: #166534; font-size: 14px; font-weight: 500;">
                ✅ Your application has been successfully registered.
              </p>
            </div>

            <h3 style="color: #1e3a8a; font-size: 16px;">Your Submission Details</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              ${[
                ["Student Name", student_name],
                ["Standard", standard],
                ["Board", board],
                ["School", school_name],
              ]
                .map(
                  ([key, value]) => `
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="padding: 8px; color: #6b7280;">${key}</td>
                  <td style="padding: 8px; color: #111827; font-weight: 500;">${value}</td>
                </tr>`
                )
                .join("")}
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #fefce8; border-radius: 8px; border: 1px solid #fde68a;">
              <p style="margin: 0; color: #92400e; font-size: 13px;">
                📞 For immediate assistance, call us at: <strong>+91 96771 70609</strong><br>
                🌐 Visit: <a href="https://siddhikshaedu.com" style="color: #1d4ed8;">siddhikshaedu.com</a>
              </p>
            </div>

            <p style="color: #6b7280; font-size: 13px; margin-top: 24px;">
              Warm regards,<br>
              <strong>Siddhiksha Education Care</strong><br>
              "A Place to Learn!"<br>
              Chennai, Tamil Nadu
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: admission.id });
  } catch (error) {
    console.error("Admission API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
