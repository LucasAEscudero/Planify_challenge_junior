export interface serviceType {
  id: number;
  name: string;
  description: string;
  category?: string;
}

export interface turnsType extends serviceType {
  date: string;
}
