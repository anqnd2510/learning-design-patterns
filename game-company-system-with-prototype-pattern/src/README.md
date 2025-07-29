# Prototype Pattern

## ❓ Mục đích của Prototype Pattern là gì?

> ` Prototype Pattern` nhằm `tạo ra các đối tượng mới bằng cách sao chép (clone) từ một đối tượng gốc (prototype)`, thay vì tạo mới thông qua constructor.
> -> Tức là dùng object.clone() thay vì new Object().

---

## ❓ Nó giải quyết vấn đề gì?

> Prototype giải quyết các vấn đề sau:
>
> - Khi việc khởi tạo đối tượng mới rất tốn chi phí ( về thời gian, tài nguyên hoặc phức tạp).
> - Hoặc khi cần tạo nhiều đối tượng giống nhau về cấu trúc ban đầu nhưng khác biệt nhẹ về nội dung.
> - Tránh phụ thuộc vào lớp cụ thể, hướng đén khởi tạo dựa trên interface (cloneable).

---

## ❓ Có thể sử dụng nó khi nào?

> Sử dụng khi cần:
>
> - Khi đối tượng cần tạo có cấu trúc phức tạp, khởi tạo tốn kém ( ví dụ như chứa nhiều object con, tính toán nặng hoặc truy vấn cơ sở dữ liệu).
> - Khi hệ thống cần tạo nhiều đối tượng tương tự nhau.
> - Khi muốn tránh `new` và ràng buộc chặt với constructor cụ thể.
> - Trong hệ thống cần `tạo bản sao (deep hoặc shallow)` từ một mẫu gốc có thể cấu hình linh hoạt.

---

## ❓ Nếu quá lạm dụng Proxy Pattern thì?

> Dễ gấy `khó khăn trong việc quản lý logic clone (nông và sâu)`, nhất là với object phức tạp.
> Nếu prototype bị thay đổi không kiểm soát,`các bản sao cũng bị ảnh hưởng` hoặc bị clone sai lệch.
> Có thể gây `tăng độ phức tạp của hệ thống` nếu dùng không cần thiết - đặc biệt là khi constructor có thể dùng đơn giản và rõ ràng hơn.
