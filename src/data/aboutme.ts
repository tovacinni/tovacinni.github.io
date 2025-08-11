export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Towaki Takikawa",
  title: "Co-Founder / CEO",
  institution: "Outerport",
  // Note that links work in the description
  description:
    'I am currently working on <a href="https://www.outerport.com">AI models to parse technical documents and diagrams</a> to help companies in finance, manufacturing, and AEC build reliable AI agents that can understand visual information.<br><br>Until recently, I worked as a Research Scientist at <a href="https://www.nvidia.com/en-us/research/">NVIDIA Research</a> on 3D generative AI, geometry processing, and 3D computer vision, followed by a sting in AI consulting work for AEC and entertainment.<br><br>I was also concurrently a Computer Science PhD student (on leave) at the <a href="https://utoronto.ca">University of Toronto</a>, supervised by <a href="https://www.cs.utoronto.ca/~fidler">Sanja Fidler</a> and <a href="https://www.cs.utoronto.ca/~jacobson">Alec Jacobson</a>.',
  email: "tovacinni@gmail.com",
  imageUrl: "/images/me.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "tovacinni",
  linkedinUsername: "tovacinni",
  twitterUsername: "yongyuanxi",
  blogUrl: "https://tovacinni.github.io/blog",
  cvUrl: "https://tovacinni.github.io/cv",
  institutionUrl: "https://www.outerport.com",
  // altName: "",
  secretDescription:
    '"I wish upon you ample doses of pain and suffering" - Jensen Huang',
};
