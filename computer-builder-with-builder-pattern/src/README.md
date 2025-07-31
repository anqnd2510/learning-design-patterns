# Builder Pattern

## ❓ Mục đích của Builder Pattern là gì?

> `Builder Pattern` nhằm tách riêng `xây dựng đối tượng phức tạp` thành từng bước cụ thể, để:
>
> - Dễ kiểm soát quá trình khởi tạo.
> - Cho phép tạo ra `nhiều cấu hình khác nhau` của cùng đối tượng.

---

## ❓ Nó giải quyết vấn đề gì?

> Builder giải quyết việc `khởi tạo đối tượng có quá nhiều tham số, đặc biệt là tham số tùy chọn`, hoặc khi:
>
> - Object cần được `khởi tạo từng bước`
> - Object có nhiều cấu hình khác nhau mà constructor không thể xử lý gọn gàng (constructor telescoping problem).
> - Việc dùng setter gây ra `trạng thái không hợp lệ` (invalid state).

---

## ❓ Có thể sử dụng nó khi nào?

> Sử dụng khi cần:
>
> - Object có nhiều field (đặc biệt là optional).
> - Việc khởi tạo phức tạp (nested object, validate, xử lý nội bộ).
> - Cần tạo `nhiều phiên bản khác nhau` từ cùng một "quy trình" xây dựng.
> - Muốn tách rời logic khởi tạo khỏi logic sử dụng object.
>   📌 Ví dụ: tạo House, Pizza, User, Report, HTTP Request, v.v.

---

## ❓ Nếu quá lạm dụng Factory Method Pattern thì?

> `Code rườm rà, tốn công tạo thêm class` mà không cần thiết.
> `Tăng độ phức tạp` với những object đơn giản.
> Dễ làm `over-engineering` - giải pháp nặng cho bài toán.
> Có thể gây khó đọc nếu không dùng nhất quán hoặc naming kém rõ ràng.
