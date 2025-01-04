export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2024—Present",
    title: "Co-Founder / CEO",
    company: "Outerport",
    description: "Fast and robust retrieval using private LLMs.",
    companyUrl: "https://www.outerport.com",
  },
  {
    date: "2020-2023",
    title: "Research Scientist",
    company: "NVIDIA",
    description: "New Experiences Research Group (Hyperscale Graphics Systems).",
    manager: "David Luebke, Morgan McGuire",
    companyUrl: "https://nvidia.com",
  },
];