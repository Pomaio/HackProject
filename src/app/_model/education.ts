export interface MapSkills {
  // Дерево обучения
  startPoint: EducationNode;
  nodes: EducationNode[];
  links: EducationLink[];
}

export interface EducationNode {
  id: number;
  x: number;
  y: number;
  name: string;
  chalenges: Challenge[];
}

export interface EducationLink {
  source: number; //  EducationNode id
  target: number; //  EducationNode id
}

export interface Challenge {
  id: number;
  name: string;
  desc: string;
  solved: boolean;
}
