import { Song } from "./song";

export interface Category {
  id: number;
  name: string;
  songs?: Song
}
