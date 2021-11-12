import {Post} from "./Post";

export interface Response {
  timeStamp: Date;
  statusCode: number;
  status: string;
  reason: string;
  message: string;
  developerMessage: string;
  data: { posts: Post[], post?: Post }
}
