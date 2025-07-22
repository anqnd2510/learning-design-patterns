export type Role = "admin" | "user";
export class User {
  constructor(public username: string, public role: Role) {}
}
