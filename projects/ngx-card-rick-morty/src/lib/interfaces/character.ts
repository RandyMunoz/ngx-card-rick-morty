import { Location } from "./location";
import { Episode } from "./episode";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: Episode[];
  url: string;
  created: string;
  favorite: boolean;
}