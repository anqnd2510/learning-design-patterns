# Bridge Pattern

## ❓ Mục đích của Bridge Pattern là gì?

> Bridge Pattern tách phần trừu tượng (abstraction) ra khỏi phần hiện thực (implementation) để chúng có thể phát triển độc lập mà không ảnh hưởng lẫn nhau.

---

## ❓ Nó giải quyết vấn đề gì?

> Bridge giải quyết vấn đề `phình to cấu trúc kế thừa (class explosion)`do có quá nhiều sự kết hợp giữa abstraction và implementation. Thay vì tạo ra vô số lớp con để kết hợp chúng, Bridge chia abstraction và implementation thành hai hệ thống riêng biệt, rồi bắt cầu nối chúng lại với nhau.

---

## ❓ Có thể sử dụng nó khi nào?

> Sử dụng khi cần:
>
> - Cần mở rộng abstraction và implementation `một cách độc lập`.
> - Cấu trúc kế thừa có xu hướng `phình ra theo ma trận`(ví dụ 3 shapes × 4 colors = 12 lớp).
> - Muốn tách các phần thay đổi thường xuyên (implementation) khỏi phần ít thay đổi hơn (abstraction).

---

## ❓ Nếu quá lạm dụng Adapter Pattern thì?

> Code có thể trở nên `phức tạp và khó hiểu không cần thiết`, đặc biệt nếu số lượng abstraction và implementation không thực sự wao.
> Dễ dẫn đến `chia tách quá mức (over-engineering)`, làm giảm tính trực quan và tăng chi phí bảo trì.
> Không phù hợp cho các hệ thống đơn giản — nơi kế thừa truyền thống là đủ dùng.
