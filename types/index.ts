export interface DiagnosisForm {
  name: string;
  phone: string;
  serviceType: 'landing' | 'homepage' | 'both' | 'care';
  industry: string;
  message: string;
  agreePrivacy: boolean;
}

export interface InquiryData extends DiagnosisForm {
  id: string;
  createdAt: string;
  status: 'pending' | 'in_progress' | 'completed';
}

export interface ReservationData {
  id: string;
  date: string;
  timeSlot: string;
  customTime: string;
  name: string;
  phone: string;
  serviceType: 'landing' | 'homepage' | 'both' | 'care';
  industry: string;
  message: string;
  agreePrivacy: boolean;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'completed';
}

export interface Plan {
  id: string;
  badge?: string;
  name: string;
  subtitle?: string;
  features: string[];
  originalPrice: string;
  discountPrice: string;
  highlighted?: boolean;
  crownIcon?: boolean;
}

export interface CaseItem {
  slug: string;
  name: string;
}

export interface Review {
  text: string;
  rating: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface AdService {
  icon: string;
  title: string;
}
