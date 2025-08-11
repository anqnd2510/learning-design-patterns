# Decorator Pattern

## ❓ Mục đích của Decorator Pattern là gì?

> `Decorator  Pattern` cho phép `bổ sung hoặc thay đổi hành vi`của một đối tượng `mà không cần sửa đổi cấu trúc lớp gốc`. Nó bọc đối tượng trong một "lớp trang trí" (decorator) để mở rộng chức năng một cách linh hoạt.

---

## ❓ Nó giải quyết vấn đề gì?

> Decorator giải quyết các vấn đề sau:
>
> - Khi cần `thêm chức năng mới cho một đối tượng` mà không muốn (hoặc không thể) chỉnh sửa mã nguồn lớp gốc.
> - Tránh tạo ra `một cây kế thừa quá lớn` (nhiều subclass cho từng biến thể).
> - Cho phép `kết hợp nhiều tính năng ` một cách động, không phụ thuộc thứ tự compile.

---

## ❓ Có thể sử dụng nó khi nào?

> Sử dụng khi cần:
>
> - Khi muốn `mở rộng tính năng` của một đối tượng tại runtime, thay vì fix cứng trong compile time.
> - Khi cần `tái sử dụng các tính năng trang trí` ở nhiều nơi khác nhau.
> - Khi không muốn hoặc không thể kế thừa từ lớp gốc( do bị final, do giới hạn framework, hoặc do muốn giảm phụ thuộc).

---

## ❓ Nếu quá lạm dụng Decorator Pattern thì?

> Code trở nên `khó đọc, khó debug` vì có quá nhiều lớp decorator bọc chồng lên nhau.
> Khó lần ra luồng xử lý thật sự của đối tượng.
> Có thể `giảm hiệu năng` nếu decorator lồng nhau nhiều tầng.
> Tăng độ phức tạp trong bảo trì nếu không quản lý rõ ràng các lớp trang trí.
