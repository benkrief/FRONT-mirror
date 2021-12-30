import {Address} from "./Address";
import {Coordinate} from "./Coordinate";
import {Photo} from "./Photo";

export interface Post {
  title: string;
  description: string;
  address: Address;
  geodecoding: Coordinate;
  photo: Photo;
}
