export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "NVIDIA Kaolin Core",
    description: "GPU / CUDA kernels for 3D machine learning.",
    projectUrl: "https://github.com/NVIDIAGameWorks/kaolin",
    codeUrl: "https://github.com/NVIDIAGameWorks/kaolin",
    imageUrl: "/images/kaolin.png",
  },
  {
    title: "NVIDIA Kaolin Wisp",
    description: "GPU-accelerated library for neural fields.",
    projectUrl: "https://github.com/NVIDIAGameWorks/kaolin-wisp",
    codeUrl: "https://github.com/NVIDIAGameWorks/kaolin-wisp",
    imageUrl: "/images/wisp.jpg",
  },
  {
    title: "WATonomous",
    description: "Built an autonomous vehicles from scratch.",
    projectUrl: "https://watonomous.ca",
    imageUrl: "/images/watonomous.jpg",
  },
];
