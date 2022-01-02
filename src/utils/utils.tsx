import { auth } from "../constants/tmpUsers";
import { IUser } from "../types/types";

export const stripUsersOfAuth = (users: IUser[]): IUser[] => {
    return users.filter((user: IUser) => user.id != auth.id);
}
