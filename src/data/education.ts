export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2020—(on leave)",
    institution: "University of Toronto",
    degree: "Ph.D. in Computer Science",
    advisor: "Sanja Fidler and Alec Jacobson",
  },
  {
    year: "2016—2020",
    institution: "University of Waterloo",
    degree: "B.S. in Computer Science",
  },
];
