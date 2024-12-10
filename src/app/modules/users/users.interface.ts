export const USER_ROLE = {
  ADMIN: "admin",
  USER: "user",
} as const;
export type TUserRole = "admin" | "user";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  photo?: string;
};

export const USER_ROLE_ENUM = {
  ADMIN: "admin",
  USER: "user"
} as const;
