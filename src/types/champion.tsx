export type Champion = {
  id: number;
  name: string;
  title: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  tags: string[];
  blurb: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  recommended: {
    type: string;
    map: string;
    mode: string;
    priority: boolean;
    blocks: {
      type: string;
      items: {
        id: string;
        count: number;
        hideCount: boolean;
      }[];
    }[];
  }[];
};

export type Champions = {
  [key: string]: Champion;
}
