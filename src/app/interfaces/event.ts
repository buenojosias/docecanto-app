export interface Event {
  title: string;
  local: string;
  date: string;
  time?: string;
  description: string;
  is_presentation: boolean;
  answer?: string;
}
