export default interface IJoke {
  categories: array;
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export interface IJokeState {
  loading: boolean;
  error: string;
  joke: IJoke;
}
