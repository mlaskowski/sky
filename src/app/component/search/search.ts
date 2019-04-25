export interface SearchObject {
  Response?: string;
  Search?: SearchElement[];
  totalResults?: number;
  Error?: string;
}
export interface SearchElement {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
