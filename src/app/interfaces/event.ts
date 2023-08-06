export interface Event {
  id: string;
  title: string;
  local: string;
  date: string;
  nearby?: string;
  time?: string;
  description: string;
  is_presentation: boolean;
  is_member: boolean;
  answer?: string;
}
