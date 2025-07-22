import { User } from "./models/user.model";
import { UserProxy } from "./proxy/user.proxy";

const admin = new User("duy an", "admin");
const client = new User("client", "user");

const adminProxy = new UserProxy(admin);
const clientProxy = new UserProxy(client);

console.log("▶ Try with admin:");
adminProxy.deleteUser("u123"); // ✅ Allowed

console.log("\n▶ Try with client role user:");
clientProxy.deleteUser("u456"); // ❌ Denied
