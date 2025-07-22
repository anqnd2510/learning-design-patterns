import { IUser } from "../interfaces/user.interface";

export class UserService implements IUser {
  public deleteUser(userId: string): void {
    console.log(`✅ User with ID ${userId} has been deleted.`);
  }
}

//hệ thống thật, chứa logic nhạy cảm (xóa user, sửa dữ liệu, v.v.)
