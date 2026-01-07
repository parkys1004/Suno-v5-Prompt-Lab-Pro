export interface Prompt {
  text: string;
  desc: string;
}

export interface Genre {
  id: number;
  name: string;
  category: "Standard" | "K-POP";
  desc: string;
  attr: number[]; // [Energy, Electronic, Acoustic, Atmosphere, Complexity]
  tags: string[];
  prompts: Prompt[];
}