import { IAuth } from "./auth.interface";

export interface IUser extends IAuth {
    id:                 string;
    name:               string;
    status:             string;
    bio:                string;
    profile_image:      string;
    location:           string;
    posts:              number;
    following:          number;
    followers:          number;
    verified:           boolean;
}