import ICourses from "../Book_Interface";

export interface IUserDetails {
  fullname: string;
  email: string; // no duplicates allowed.
  phone: string;
  address: string;
  userId: string;
  isAdmin: boolean;
  password: string;
}

export default interface IUser {
  fullname: string;
  email: string; // no duplicates allowed.
  phone: string;
  address: string;
  _id: string;
  isAdmin: boolean;
  password: string;
  Courses?: ICourses[];
}
