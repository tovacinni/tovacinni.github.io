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
}

/*
A LoRA is Worth a Thousand Pictures
Chenxi Liu, Towaki Takikawa, Alec Jacobson
arXiv, 2024
Paper Link / Bibtex

LoRAs > embeddings for retrieval and clustering.

	
Lagrangian Hashing for Compressed Neural Field Representations
Shrisudhan Govindarajan, Zeno Sambugaro, Ahan Shabhanov, Towaki Takikawa, Weiwei Sun, Daniel Rebain, Nicola Conci, Kwang Moo Yi, Andrea Tagliasacchi
European Conference on Computer Vision (ECCV), 2024
Project Website / Bibtex

Points + grids + hash tables for neural field compression.

	
What You See is What You GAN: Rendering Every Pixel for High-Fidelity Geometry in 3D GANs
Alex Trevithick, Matthew Chan, Towaki Takikawa, Umar Iqbal, Shalini De Mello, Manmohan Chandraker, Ravi Ramamoorthi, Koki Nagano
Computer Vision and Pattern Recognition (CVPR), 2024
Project Website / Bibtex

Adaptive sampling in rendering = higher fidelity geometry.

	
Compact Neural Graphics Primitives with Learned Hash Probing
Towaki Takikawa, Thomas Müller, Merlin Nimier-David, Alex Evans, Sanja Fidler, Alec Jacobson, Alexander Keller
SIGGRAPH Asia, 2023
Project Website / Bibtex

Learned hash probing + hash tables = more compression & faster.

	
ATT3D: Amortized Text-To-3D Object Synthesis
Jonathan Lorraine, Kevin Xie, Xiaohui Zeng, Chen-Hsuan Lin, Towaki Takikawa, Nicholas Sharp, Tsung-Yi Lin, Ming-Yu Liu, Sanja Fidler, James Lucas
International Conference on Computer Vision (ICCV), 2023
Project Website / Bibtex

Optimize 3D generation over more prompts -> faster convergence.

	
Magic3D: High-Resolution Text-to-3D Content Creation
Chen-Hsuan Lin*, Jun Gao*, Luming Tang*, Towaki Takikawa*, Xiaohui Zeng*, Xun Huang, Karsten Kreis, Sanja Fidler, Ming-Yu Liu, Tsung-Yi Lin
Computer Vision and Pattern Recognition (CVPR), 2023
Highlight (Top 2%)
Project Website / Bibtex

Scaling up 3D generation with smarter data structures.

	
Variable Bitrate Neural Fields
Towaki Takikawa, Alex Evans, Jonathan Tremblay, Thomas Müller, Morgan McGuire, Alec Jacobson, Sanja Fidler
SIGGRAPH North America, 2022
Project Website / Code / Bibtex

Learned indexing = more compressive than hash tables and grids.

	
A Dataset and Explorer for 3D Signed Distance Functions
Towaki Takikawa, Andrew Glassner, Morgan McGuire
Journal of Computer Graphics Techniques (JCGT / i3D), 2022
Project Website / Code / Bibtex

Dataset of shapes made with math equations.

	
Neural Fields in Visual Computing and Beyond
Yiheng Xie, Towaki Takikawa, Shunsuke Saito, Or Litany, Shiqin Yan, Numair Khan, Federico Tombari, James Tompkin, Vincent Sitzmann, Srinath Sridhar
Eurographics / Computer Graphics Forum (EG / CGF), 2022
State of the Art Report (STAR)
Project Website / Bibtex

Survey of representing vector fields with neural networks.

	
RTMV: A Ray-Traced Multi-View Synthetic Dataset for Novel View Synthesis
Jonathan Tremblay, Moustafa Meshry, Alex Evans, Jan Kautz, Alexander Keller, Sameh Khamis, Charles Loop, Nathan Morrical, Thomas Müller, Koki Nagano, Towaki Takikawa, Stan Birchfield
Tech Report, 2022
Project Website / Bibtex

Really big dataset of synthetic multi-view images.

	
Neural Geometric Level of Detail: Real-time Rendering with Implicit 3D Shapes
Towaki Takikawa*, Joey Litalien*, Kangxue Yin, Karsten Kreis, Charles Loop, Derek Nowrouzezahrai, Alec Jacobson, Morgan McGuire, Sanja Fidler
Computer Vision and Pattern Recognition (CVPR), 2021
Oral Presentation (Top 4%)
Project Website / Code / Video / Bibtex

Differentiable data structures + neural fields + GPU programming = fast.

	
Gated-SCNN: Gated Shape CNNs for Semantic Segmentation
Towaki Takikawa*, David Acuna*, Varun Jampani, Sanja Fidler
International Conference on Computer Vision (ICCV), 2019
Project Website / Code / Bibtex

Pay attention to object boundaries for better computer vision.
*/
export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2024",
    conference: "arXiv",
    title: "A LoRA is Worth a Thousand Pictures",
    authors: "Chenxi Liu, Towaki Takikawa, Alec Jacobson",
    paperUrl: "https://arxiv.org/abs/2412.12048",
    tldr: "LoRAs > embeddings for retrieval and clustering.",
    imageUrl: "/images/lora.jpg"
  },
  {
    year: "2024",
    conference: "ECCV",
    title: "Lagrangian Hashing for Compressed Neural Field Representations",
    authors: "Shrisudhan Govindarajan, Zeno Sambugaro, Ahan Shabhanov, Towaki Takikawa, Weiwei Sun, Daniel Rebain, Nicola Conci, Kwang Moo Yi, Andrea Tagliasacchi",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    tldr: "Points + grids + hash tables for neural field compression.",
    imageUrl: "/images/lagrangian.png"
  },
  {
    year: "2024",
    conference: "CVPR",
    title: "What You See is What You GAN: Rendering Every Pixel for High-Fidelity Geometry in 3D GANs",
    authors: "Alex Trevithick, Matthew Chan, Towaki Takikawa, Umar Iqbal, Shalini De Mello, Manmohan Chandraker, Ravi Ramamoorthi, Koki Nagano",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    tldr: "Adaptive sampling in rendering = higher fidelity geometry.",
    imageUrl: "/images/3dgan.jpg"
  },
  {
    year: "2023",
    conference: "SIGGRAPH Asia",
    title: "Compact Neural Graphics Primitives with Learned Hash Probing",
    authors: "Towaki Takikawa, Thomas Müller, Merlin Nimier-David, Alex Evans, Sanja Fidler, Alec Jacobson, Alexander Keller",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    tldr: "Learned hash probing + hash tables = more compression & faster.",
    imageUrl: "/images/compact-ngp.jpg"
  },
  {
    year: "2023",
    conference: "ICCV",
    title: "ATT3D: Amortized Text-To-3D Object Synthesis",
    authors: "Jonathan Lorraine, Kevin Xie, Xiaohui Zeng, Chen-Hsuan Lin, Towaki Takikawa, Nicholas Sharp, Tsung-Yi Lin, Ming-Yu Liu, Sanja Fidler, James Lucas",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    tldr: "Optimize 3D generation over more prompts -> faster convergence.",
    imageUrl: "/images/att3d.jpg"
  },
  {
    year: "2023",
    conference: "CVPR",
    title: "Magic3D: High-Resolution Text-to-3D Content Creation",
    authors: "Chen-Hsuan Lin*, Jun Gao*, Luming Tang*, Towaki Takikawa*, Xiaohui Zeng*, Xun Huang, Karsten Kreis, Sanja Fidler, Ming-Yu Liu, Tsung-Yi Lin",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    tldr: "Scaling up 3D generation with smarter data structures.",
    imageUrl: "/images/magic3d.png"
  },
  {
    year: "2022",
    conference: "SIGGRAPH North America",
    title: "Variable Bitrate Neural Fields",
    authors: "Towaki Takikawa, Alex Evans, Jonathan Tremblay, Thomas Müller, Morgan McGuire, Alec Jacobson, Sanja Fidler",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    tldr: "Learned indexing = more compressive than hash tables and grids.",
    imageUrl: "/images/variable.png"
  },
  {
    year: "2022",
    conference: "JCGT",
    title: "A Dataset and Explorer for 3D Signed Distance Functions",
    authors: "Towaki Takikawa, Andrew Glassner, Morgan McGuire",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    tldr: "Dataset of shapes made with math equations.",
    imageUrl: "/images/dataset.png"
  },
  {
    year: "2022",
    conference: "EG / CGF",
    title: "Neural Fields in Visual Computing and Beyond",
    authors: "Yiheng Xie, Towaki Takikawa, Shunsuke Saito, Or Litany, Shiqin Yan, Numair Khan, Federico Tombari, James Tompkin, Vincent Sitzmann, Srinath Sridhar",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    tldr: "Survey of representing vector fields with neural networks.",
    imageUrl: "/images/neuralfields.png"
  },
  {
    year: "2022",
    conference: "Tech Report",
    title: "RTMV: A Ray-Traced Multi-View Synthetic Dataset for Novel View Synthesis",
    authors: "Jonathan Tremblay, Moustafa Meshry, Alex Evans, Jan Kautz, Alexander Keller, Sameh Khamis, Charles Loop, Nathan Morrical, Thomas Müller, Koki Nagano, Towaki Takikawa, Stan Birchfield",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    tldr: "Really big dataset of synthetic multi-view images.",
    imageUrl: "/images/rtmv.jpg"
  },
  {
    year: "2021",
    conference: "CVPR",
    title: "Neural Geometric Level of Detail: Real-time Rendering with Implicit 3D Shapes",
    authors: "Towaki Takikawa*, Joey Litalien*, Kangxue Yin, Karsten Kreis, Charles Loop, Derek Nowrouzezahrai, Alec Jacobson, Morgan McGuire, Sanja Fidler",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    tldr: "Differentiable data structures + neural fields + GPU programming = fast.",
    imageUrl: "/images/nglod.png"
  },
  {
    year: "2019",
    conference: "ICCV",
    title: "Gated-SCNN: Gated Shape CNNs for Semantic Segmentation",
    authors: "Towaki Takikawa*, David Acuna*, Varun Jampani, Sanja Fidler",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    tldr: "Pay attention to object boundaries for better computer vision.",
    imageUrl: "/images/gscnn.jpg"
  }
];
