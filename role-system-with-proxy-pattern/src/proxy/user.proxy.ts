import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";
import { UserService } from "../real/user.service";

export class UserProxy implements IUser {
  private realService = new UserService();
  private currentUser: User;

  constructor(currentUser: User) {
    this.currentUser = currentUser;
  }

  public deleteUser(userId: string): void {
    if (this.currentUser.role !== "admin") {
      console.log(
        `❌ Access Denied: ${this.currentUser.username} is not an admin.`
      );
      return;
    }

    this.realService.deleteUser(userId);
  }
}
// lớp trung gian kiểm soát quyền truy cập trước khi vào hệ thống thật
// user có thể gửi request nhưng mà chỉ đi qua proxy, không bao giờ vào thẳng được logic gốc
// admin là người thiết kế luật, cấu hình hệ thống, thiết lập role -> proxy kiểm tra dựa vào đó
