export interface Exercise {
  id: string;
  title: string;
  app: string;
  desc: string;
  template: string;
  iconName: string;
}

export interface Category {
  id: string;
  title: string;
  iconName: string;
  color: string; // e.g. "purple", "orange", "lime", "blue", "teal"
  exercises: Exercise[];
}

export interface InputVariables {
  ageMin: string;
  ageMax: string;
  duree: string;
  theme: string;
  contexte: string;
}
