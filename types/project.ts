export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPoint?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: number;
  size: string;
  description: string;
  highlight: string;
  featured: boolean;
  isProcess?: boolean;
  image: ProjectImage;
}
