# Singleton Pattern

## ❓ Mục đích của Singleton Pattern là gì?

> Singleton Pattern đảm bảo rằng `chỉ có duy nhất một thể hiện (instance)` của một lớp tồn tại trong suốt vòng đời chương trình, và cung cấp một `điểm truy cập toàn cục (global access point)` đến thể hiện đó.

---

## ❓ Nó giải quyết vấn đề gì?

> Giải quyết vấn đề `kiểm soát số lượng đối tượng được tạo ra`, đặc biệt là khi nhiều instance sẽ gây ra lỗi logic hoặc tiêu tốn tài nguyên.
> Giúp `chia sẻ trạng thái, cấu hình hoặc dịch vụ dùng chung` như: logger, connection pool, config manager.

---

## ❓ Có thể sử dụng nó khi nào?

> Sử dụng khi cần:
>
> - Khi cần đảm bảo `chỉ có một đối tượng duy nhất` cho một nhiệm vụ cụ thể.
> - Khi muốn `truy cập đối tượng đó một cách dễ dàng từ nhiều nơi` trong ứng dụng.
> - Ví dụ thực tế:
> - `Logger`: chỉ cần một logger duy nhất ghi log cho toàn bộ app.
> - `Database Connection Manager`: quản lý kết nối để tránh tạo quá nhiều.
> - `App Configuration`: giữ cấu hình toàn cục (env, API keys, v.v.)

---

## ❓ Nếu quá lạm dụng Singleton Pattern thì?

> Gây `phụ thuộc toàn cục (global state)` -> khó test, khó mở rộng
> Làm `mờ ranh giới giữa các thành phần`, khiến các module trở nên `ít cách biệt` và khó kiểm soát.
> Trong môi trường đa luồng (multi-threading), nếu không cẩn thận, dễ dẫn đến `race condition` hoặc lỗi đồng bộ hóa.
> Có thể dẫn đến `anti-pattern` nếu dùng singleton như biến toàn cục để né dependency injection.
