import { Category } from "./category";

export interface Song {
  id: number;
  number: number;
  title: string;
  resume: string;
  lyrics: string;
  detached: boolean;
  categories?: Category;
}
