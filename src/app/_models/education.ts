import * as d3 from 'd3';
import APP_CONFIG from 'src/app/app.config';

export interface MapSkills {
  // Дерево обучения
  startPoint: EducationNode;
  nodes: EducationNode[];
  links: EducationLink[];
}

export class EducationNode implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  name: string;
  chalengeId: number;
  r: number;
  fontSize: number;
  imageUrl: string;
  linkCount = 0;

  constructor(id, r, fontSize, imageUrl, challengeId = 1) {
    this.id = id;
    this.r = r;
    this.fontSize = fontSize;
    this.imageUrl = imageUrl;
    this.chalengeId = challengeId;
  }

  // normal = () => {
  //   return Math.sqrt(this.linkCount / APP_CONFIG.N);
  // };

  // get r() {
  //   return 50 * this.normal() + 10;
  // }

  // get fontSize() {
  //   return 30 * this.normal() + 10 + 'px';
  // }

  // get color() {
  //   const index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
  //   return APP_CONFIG.SPECTRUM[index];
  // }
}

export class EducationLink implements d3.SimulationLinkDatum<EducationNode> {
  index?: number;

  source: EducationNode | string | number;
  target: EducationNode | string | number;

  constructor(source: EducationNode | string | number, target: EducationNode | string | number) {
    this.source = source;
    this.target = target;
  }
}

export interface Challenge {
  id: number;
  name: string;
  desc: string;
  excersices: Excercise[];
  solved: boolean;
}

export interface Excercise {
  title: string;
  question: string;
  answers: string[];
  rightAnswer: string[];
}
