export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2024",
    conference: "arXiv",
    title: "A LoRA is Worth a Thousand Pictures",
    authors: "Chenxi Liu, Towaki Takikawa, Alec Jacobson",
    paperUrl: "https://arxiv.org/abs/2412.12048",
    tldr: "LoRAs > embeddings for retrieval and clustering.",
    imageUrl: "/images/lora.jpg",
  },
  {
    year: "2024",
    conference: "ECCV",
    title: "Lagrangian Hashing for Compressed Neural Field Representations",
    authors:
      "Shrisudhan Govindarajan, Zeno Sambugaro, Ahan Shabhanov, Towaki Takikawa, Weiwei Sun, Daniel Rebain, Nicola Conci, Kwang Moo Yi, Andrea Tagliasacchi",
    paperUrl: "https://theialab.github.io/laghashes/",
    codeUrl: "https://github.com/theialab/lagrangian_hashes",
    tldr: "Points + grids + hash tables for neural field compression.",
    imageUrl: "/images/lagrangian.png",
  },
  {
    year: "2024",
    conference: "CVPR",
    title:
      "What You See is What You GAN: Rendering Every Pixel for High-Fidelity Geometry in 3D GANs",
    authors:
      "Alex Trevithick, Matthew Chan, Towaki Takikawa, Umar Iqbal, Shalini De Mello, Manmohan Chandraker, Ravi Ramamoorthi, Koki Nagano",
    paperUrl: "https://research.nvidia.com/labs/nxp/wysiwyg/",
    tldr: "Adaptive sampling in rendering = higher fidelity geometry.",
    imageUrl: "/images/3dgan.jpg",
  },
  {
    year: "2023",
    conference: "SIGGRAPH Asia",
    title: "Compact Neural Graphics Primitives with Learned Hash Probing",
    authors:
      "Towaki Takikawa, Thomas Müller, Merlin Nimier-David, Alex Evans, Sanja Fidler, Alec Jacobson, Alexander Keller",
    paperUrl: "https://research.nvidia.com/labs/toronto-ai/compact-ngp/",
    tldr: "Learned hash probing + hash tables = more compression & faster.",
    imageUrl: "/images/compact-ngp.jpg",
  },
  {
    year: "2023",
    conference: "ICCV",
    title: "ATT3D: Amortized Text-To-3D Object Synthesis",
    authors:
      "Jonathan Lorraine, Kevin Xie, Xiaohui Zeng, Chen-Hsuan Lin, Towaki Takikawa, Nicholas Sharp, Tsung-Yi Lin, Ming-Yu Liu, Sanja Fidler, James Lucas",
    paperUrl: "https://research.nvidia.com/labs/toronto-ai/ATT3D/",
    tldr: "Optimize 3D generation over more prompts -> faster convergence.",
    imageUrl: "/images/att3d.jpg",
  },
  {
    year: "2023",
    conference: "CVPR",
    title: "Magic3D: High-Resolution Text-to-3D Content Creation",
    authors:
      "Chen-Hsuan Lin*, Jun Gao*, Luming Tang*, Towaki Takikawa*, Xiaohui Zeng*, Xun Huang, Karsten Kreis, Sanja Fidler, Ming-Yu Liu, Tsung-Yi Lin",
    paperUrl: "https://research.nvidia.com/labs/dir/magic3d/",
    tldr: "Scaling up 3D generation with smarter data structures.",
    imageUrl: "/images/magic3d.png",
    award: "⭐ Highlight (Top 2%)",
  },
  {
    year: "2022",
    conference: "SIGGRAPH North America",
    title: "Variable Bitrate Neural Fields",
    authors:
      "Towaki Takikawa, Alex Evans, Jonathan Tremblay, Thomas Müller, Morgan McGuire, Alec Jacobson, Sanja Fidler",
    paperUrl: "https://nv-tlabs.github.io/vqad/",
    tldr: "Learned indexing = more compressive than hash tables and grids.",
    imageUrl: "/images/variable.png",
  },
  {
    year: "2022",
    conference: "JCGT",
    title: "A Dataset and Explorer for 3D Signed Distance Functions",
    authors: "Towaki Takikawa, Andrew Glassner, Morgan McGuire",
    paperUrl: "https://tovacinni.github.io/sdf-explorer/",
    codeUrl: "https://github.com/tovacinni/sdf-explorer",
    tldr: "Dataset of shapes made with math equations.",
    imageUrl: "/images/dataset.png",
  },
  {
    year: "2022",
    conference: "EG / CGF",
    title: "Neural Fields in Visual Computing and Beyond",
    authors:
      "Yiheng Xie, Towaki Takikawa, Shunsuke Saito, Or Litany, Shiqin Yan, Numair Khan, Federico Tombari, James Tompkin, Vincent Sitzmann, Srinath Sridhar",
    paperUrl: "https://neuralfields.cs.brown.edu/eg22.html",
    tldr: "Survey of representing vector fields with neural networks.",
    imageUrl: "/images/neuralfields.png",
  },
  {
    year: "2022",
    conference: "Tech Report",
    title:
      "RTMV: A Ray-Traced Multi-View Synthetic Dataset for Novel View Synthesis",
    authors:
      "Jonathan Tremblay, Moustafa Meshry, Alex Evans, Jan Kautz, Alexander Keller, Sameh Khamis, Charles Loop, Nathan Morrical, Thomas Müller, Koki Nagano, Towaki Takikawa, Stan Birchfield",
    paperUrl: "http://www.cs.umd.edu/~mmeshry/projects/rtmv/",
    tldr: "Really big dataset of synthetic multi-view images.",
    imageUrl: "/images/rtmv.jpg",
  },
  {
    year: "2021",
    conference: "CVPR",
    title:
      "Neural Geometric Level of Detail: Real-time Rendering with Implicit 3D Shapes",
    authors:
      "Towaki Takikawa*, Joey Litalien*, Kangxue Yin, Karsten Kreis, Charles Loop, Derek Nowrouzezahrai, Alec Jacobson, Morgan McGuire, Sanja Fidler",
    paperUrl: "https://research.nvidia.com/labs/toronto-ai/nglod/",
    codeUrl: "https://github.com/nv-tlabs/nglod",
    tldr: "Differentiable data structures + neural fields + GPU programming = fast.",
    imageUrl: "/images/nglod.png",
    award: "⭐ Oral Presentation (Top 4%)",
  },
  {
    year: "2019",
    conference: "ICCV",
    title: "Gated-SCNN: Gated Shape CNNs for Semantic Segmentation",
    authors: "Towaki Takikawa*, David Acuna*, Varun Jampani, Sanja Fidler",
    paperUrl: "https://research.nvidia.com/labs/toronto-ai/GSCNN/",
    codeUrl: "https://github.com/nv-tlabs/GSCNN",
    tldr: "Pay attention to object boundaries for better computer vision.",
    imageUrl: "/images/gscnn.jpg",
  },
];
