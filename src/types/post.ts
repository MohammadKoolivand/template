export type Question = {
  name: string;
  username: string;
  avatar: string;
  title: string;
  type: "Text" | "Image" | "Split" | "Gallery" | "Pairs";
  opened: string;
  expired: string;
  votes: number;
  likes: number;
  comments: number;
  share: number;
  image: string;
  options: {
    label: string;
    percent: number;
    image: string;
  }[];
  isClosed: boolean;
  nextId: string;
  nextTitle: string;
  prevId: string;
  prevTitle: string;
};
