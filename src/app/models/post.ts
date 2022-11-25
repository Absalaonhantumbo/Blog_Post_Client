import {IUser} from "./user";

export interface IPost {
  id: number | undefined;
  title: string | undefined;
  content: string | undefined;
  imageUrl: string | undefined;
  dateCreated: Date | undefined;
  author: IUser
}
