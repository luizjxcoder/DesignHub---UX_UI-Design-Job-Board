export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  salary?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
  applicationDeadline?: string;
  companyLogo?: string;
  remote: boolean;
  featured: boolean;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  description: string;
  website: string;
  location: string;
  size: string;
  founded: string;
  industry: string[];
}

export interface FilterOptions {
  jobType: string[];
  remote: boolean | null;
  experience: string[];
  location: string;
}
