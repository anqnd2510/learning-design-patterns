# Facade Pattern

## ❓ Mục đích của Facade Pattern là gì?

> `Facade Pattern` nhằm cung cấp một `giao diện đơn giản và nhất quán` để che giấu sự phức tạp của một hệ thống con gồm nhiều lớp hoặc nhiều đối tượng khác nhau. Nó gom nhóm nhiều lời gọi phức tạp thành một API thân thiện hơn cho client.

---

## ❓ Nó giải quyết vấn đề gì?

> Nó giải quyết vấn đề `phụ thuộc quá mức vào các lớp con chi tiết` trong một hệ thống lớn, bằng cách tách biệt `client` với `hệ thống nội bộ`. Giúp giảm sự rối rắm khi phải thao tác với nhiều thành phần bên trong một hệ thống phức tạp(ví dụ: hệ thống thanh toán, đặt hàng trên sàn thương mại điện tử, xử lý dữ liệu, khởi tạo nhiều service, v.v.).

---

## ❓ Có thể sử dụng nó khi nào?

> Sử dụng khi cần:
>
> - Khi muốn `đơn giản hóa việc sử dụng hoặc tích hợp` một hệ thống phức tạp.
> - Khi muốn `giảm sự phụ thuộc` giữa client và các lớp chi tiết của hệ thống.
> - Khi muốn cung cấp một `API mức cao cho bên ngoài`, trong khi giữ nguyên sự phức tạp bên trong.
> - Khi cần `tách biệt các lớp bên trong` để dễ bảo trì hoặc thay đổi hệ thống phía sau mà không ảnh hưởng đến client.

---

## ❓ Nếu quá lạm dụng Facade Pattern thì?

> Dễ dẫn đến việc `tạo quá nhiều lớp facade không cần thiết`, gây dư thừa.
> Có thể `che giấu quá nhiều logic`, làm giảm khả năng mở rộng và tùy biến của client nếu họ cần quyền truy cập trực tiếp vào các lớp con.
> Client có thể `mất khả năng điều khiển chi tiết`, nếu Facade không đủ linh hoạt hoặc bị thiết kế kém.
> Nếu thay đổi trong hệ thống con mà không cập nhật Facade tương ứng, có thể dẫn đến `sai lệch hoặc lỗi khó debug`.
