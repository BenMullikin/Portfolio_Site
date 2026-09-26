export type Project = {
  default: any;
  metadata: ProjectMetaData;
}

export type ProjectMetaData = {
  title: string;
  description: string;
  status: string;
  rev: string;
  start_date: string;
  github?: string;
  category?: string;
  tags: string[];
  specs?: string[];
  related?: string[];
  sub_projects?: string[];
  cover_image?: string;
}
