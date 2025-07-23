# Factory Method Pattern

## ❓ Mục đích của Factory Method Pattern là gì?

> `Factory Method Pattern` nhằm `ủy quyền việc khởi tạo đối tượng cho các lớp con`, giúp mã nguồn linh hoạt hơn khi muốn mở rộng các loại đối tượng mà không cần sửa đổi lớp gốc.

---

## ❓ Nó giải quyết vấn đề gì?

> Factory giải quyết các vấn đề sau:
>
> - Khi `lớp cha không biết chính xác lớp con nào cần được khởi tạo`
> - Khi muốn `tách riêng logic khởi tạo đối tượng khỏi phải cần sử dụng đối tượng.`
> - Giúp `tuân thủ nguyên tắc Mở/Đóng (Open/Closed Principle) OCP`: mở rộng dễ dàng mà không cần sửa code cũ.

---

## ❓ Có thể sử dụng nó khi nào?

> Sử dụng khi cần:
>
> - Khi có một `lớp cha định nghĩa interface chung`, nhưng muốn để `lớp con quyết định kiểu đối tượng cụ thể nào sẽ được khởi tạo.`
> - Khi có `nhiều lớp con` và muốn `khởi tạo một trong số chúng theo điều kiện` mà không để logic đó rối trong lớp chính.
> - Khi muốn viết `code dễ test, dễ mở rộng và dễ maintain hơn`.

---

## ❓ Nếu quá lạm dụng Factory Method Pattern thì?

> Gây `phức tạp hóa cấu trúc hệ thống` với quá nhiều lớp con và lớp khởi tạo riêng.
> Mã dễ bị `chia nhỏ không cần thiết`, gây khó khăn trong việc đọc hiểu và bảo trì.
> Nếu không có nhu cầu mở rộng linh hoạt, thì việc tạo thêm lớp factory là `thừa và tốn công`.
