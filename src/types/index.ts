export interface Faculty {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  subject_expertise: string;
  description: string;
  photo_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Achievement {
  id: string;
  student_name: string;
  standard: string;
  school_name: string;
  board: "State Board" | "CBSE";
  marks_percentage: string;
  achievement_description: string;
  photo_url: string | null;
  is_rank_holder: boolean;
  rank?: string;
  year: string;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  parent_name: string;
  student_name: string;
  standard: string;
  content: string;
  rating: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Admission {
  id: string;
  student_name: string;
  parent_name: string;
  mobile_number: string;
  email: string;
  school_name: string;
  standard: string;
  board: "State Board" | "CBSE";
  additional_notes: string | null;
  status: "pending" | "contacted" | "enrolled" | "rejected";
  created_at: string;
  updated_at: string;
}

export interface WebsiteSettings {
  id: string;
  key: string;
  value: string;
  type: "text" | "image" | "json";
  updated_at: string;
}
