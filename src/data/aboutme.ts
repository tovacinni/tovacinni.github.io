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
    'I am currently working on <a href="https://www.outerport.com/blog/agentic-search">complex document understanding</a>, using iterative reasoning and a hierarchical caching system specialized for tensors and KV cache. If this sounds interesting, please reach out to <a href="mailto:towaki@outerport.com">towaki@outerport.com</a>.<br><br>Until recently, I worked as a Research Scientist at <a href="https://www.nvidia.com/en-us/research/">NVIDIA Research</a> on the Hyperscale Graphics Systems team with <a href="https://luebke.us/">David Luebke</a> and <a href="https://casual-effects.com/morgan/index.html">Morgan McGuire</a>.<br><br>I was also concurrently a Computer Science PhD student (on leave) at the <a href="https://utoronto.ca">University of Toronto</a>, supervised by <a href="https://www.cs.utoronto.ca/~fidler">Sanja Fidler</a> and <a href="https://www.cs.utoronto.ca/~jacobson">Alec Jacobson</a>, supported by the Royal Bank of Canada, Borealis AI Fellowship.<br><br>My interests broadly span machine learning, systems, computer graphics, and computer vision. In particular, I\'m interested in compression, retrieval, distribution formats, and infrastructure for multimedia. In the past, I have worked on neural fields <a href="https://neuralfields.cs.brown.edu/">[1]</a> and their combination with differentiable data structures <a href="https://nv-tlabs.github.io/nglod/">[2</a><a href="https://nv-tlabs.github.io/vqad/">,3</a><a href="https://research.nvidia.com/labs/toronto-ai/compact-ngp/">,4]</a> as a new compressed data format for immersive media (3D JPEG!)- as well as foundation models <a href="https://research.nvidia.com/labs/dir/magic3d/">[5]</a> for generating them.',
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
