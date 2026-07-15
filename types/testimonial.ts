export type TestimonialStatus = "placeholder" | "verified";

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  projectType: string;
  location?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  status: TestimonialStatus;
}
