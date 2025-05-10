import type IUser from "./IUser";

export default interface StatItem {
  label: string;
  key: keyof IUser;
}
