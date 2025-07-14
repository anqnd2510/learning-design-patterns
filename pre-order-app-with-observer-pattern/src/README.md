# Observer Pattern

## ❓ Mục đích của Observer Pattern là gì?

> Mục đích của Observer Pattern là cho phép một đối tượng (Subject) thông báo cho một hoặc nhiều đối tượng khác (Observers) khi trạng thái của nó thay đổi, mà không cần biết cụ thể những đối tượng đó là ai.

---

## ❓ Nó giải quyết vấn đề gì?

> Nó giải quyết vấn đề `liên kết chặt chẽ (tight coupling)` giữa các đối tượng. Khi một đối tượng thay đổi, các đối tượng phụ thuộc vào nó cần được cập nhật mà không làm ảnh hưởng đến kiến trúc hoặc tạo ra sự phụ thuộc cứng.

---

## ❓ Có thể sử dụng nó khi nào?

> Sử dụng khi cần:
>
> - Một đối tượng thay đổi trạng thái và bạn muốn các đối tượng khác `tự động nhận biết và cập nhật.`
> - Muốn `giảm sự phụ thuộc trực tiếp` giữa các đối tượng phát sự kiện và các đối tượng nhận sự kiện đó.
> - Ví dụ điển hình: hệ thống event listener trong GUI, hệ thống push notification, feed cập nhật trong mạng xã hội.

---

## ❓ Nếu quá lạm dụng Observer Pattern thì?

> Gây `khó khăn trong việc debug` vì luồng cập nhật diễn ra tự động, khó kiểm soát.
> Gây `vấn đề hiệu suất` nếu có quá nhiều observers hoặc việc cập nhật quá nặng.
> Dễ bị `rò rỉ bộ nhớ` nếu không quản lý việc hủy đăng kí (unsubscribe) đúng cách.
> Làm `mờ đi luồng dữ liệu chính`, khiến việc bảo trì và đọc hiểu code trở nên khó khăn hơn
