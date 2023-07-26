export interface Event {
  id: string;
  title: string;
  local: string;
  date: string;
  time?: string;
  description: string;
  is_presentation: boolean;
  answer?: string;
}
