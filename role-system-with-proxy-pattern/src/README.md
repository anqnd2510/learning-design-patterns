# Proxy Pattern

## ❓ Mục đích của Proxy Pattern là gì?

> `Proxy Pattern` cung cấp một đối tượng thay thế (proxy) cho một đối tượng thật nhằm kiểm soát quyền truy cập, giảm chi phí khởi tạo, hoặc thêm các chức năng bổ sung(logging, caching, lazy loading, v.v.) mà không thay đổi đối tượng thật.

---

## ❓ Nó giải quyết vấn đề gì?

> Proxy giải quyết các vấn đề sau:
>
> - `Quản lý truy cập`: chẳng hạn như kiểm tra quyền người dùng trước khi truy cập tài nguyên (ví dụ: user phải có quyền admin mới được gọi delete()).
> - `Tối ưu hiệu năng`: trì hoãn việc khởi tạo đối tượng tốn kém tài nguyên cho đến khi thật sự cần (Lazy Initialization).
> - `Ghi log hoặc đếm số lần truy cập` mà không sửa đối tượng thật.
> - `Cung cấp cache` để tránh gọi nhiều lần vào hệ thống backend tốn chi phí (như API, DB).
> - `Tăng tính bảo mật` khi truy cập vào nguồn tài nguyên nhạy cảm.

---

## ❓ Có thể sử dụng nó khi nào?

> Sử dụng khi cần:
>
> - Muốn `kiểm soát hoặc giới hạn quyền truy cập` đến một đối tượng cụ thể.
> - Cần `hoãn việc khởi tạo` đối tượng thật ( ví dụ: object nặng như hình ảnh độ phân giải cao, kết nối database, remote service ).
> - Muốn `thêm hành vi bổ sung (logging, validation, caching)` trước hoặc sau khi gọi đối tượng thật, mà không thay đổi mã gốc.
> - Khi làm việc với hệ thống phân tán(ví dụ: `Remote Proxy`) như gọi RPC, dùng proxy để ẩn đi chi tiết kết nối từ client.

---

## ❓ Nếu quá lạm dụng Proxy Pattern thì?

> `Tăng độ phức tạp của hệ thống:` Quá nhiều lớp proxy đan xen gây khó hiểu và khó bảo trì.
> `Ảnh hưởng hiệu năng:` Nếu mỗi lời gọi bị "gói qua nhiều lớp", có thể tạo độ trễ không cần thiết.
> `Khó debug:` Việc lỗi không nằm ở đối tượng thật mà nằm ở proxy gây khó khăn trong việc sửa chữa.
> `Lặp lại logic:` Nếu proxy không được tái sử dụng đúng cách, sẽ dẫn đến duplication code như logging, checking.
