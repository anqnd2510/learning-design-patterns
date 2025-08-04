# Adapter Pattern

## ❓ Mục đích của Adapter Pattern là gì?

> Adapter Pattern dùng để `tương thích hai giao diện không tương đồng` sao cho một lớp (client) có thể sử dụng một lớp khác mà không cần phải thay đổi mã nguồn của nó. Nói cách khác: nó `bao bọc` (wrap) một đối tượng có giao diện không phù hợp và cung cấp một giao diện mà client mong đợi.

---

## ❓ Nó giải quyết vấn đề gì?

> Khi có một thành phần (thư viện, lớp cũ, API bên thứ ba) cung cấp chức năng cần thiết nhưng `giao diện của nó khác với cái đang dùng`, không muốn ( hoặc không thể ) chỉnh sửa trực tiếp mã của thành phần đó. Adapter sẽ giải quyết bằng cách chuyển đổi interface của thành phần đó thành interface mong muốn mà phần còn lại của hệ thống hiểu được.

---

## ❓ Có thể sử dụng nó khi nào?

> Sử dụng khi cần:
>
> - Cần tích hợp một API/đối tượng có giao diện khác với phần còn lại của hệ thống mà không sửa được (third-party, legacy).
> - Muốn giữ loose coupling nhưng tái sử dụng code có sẵn với interface khác.
> - Muốn đống gói nhiều implementation khác nhau sau một interface chung ( một dạng đơn giản của wrapper).
> - Khi client code kỳ vọng một interface cụ thể và hiện có đối tượng khác đáp ứng chức năng nhưng không cùng kiểu.

---

## ❓ Nếu quá lạm dụng Adapter Pattern thì?

> `Tăng độ phức tạp`: nhiều lớp trung gian làm code khó theo dõi, đọc hiểu.
> `Che giấu thiết kế xấu`: dùng adapter để "vá" những interface không nhất quán thay vì refactor hợp lí, dẫn đến cấu trúc bị rối rắm.
> `Hiệu năng`: mỗi lớp adapter là một bước gọi thêm (đôi khi nhỏ nhưng tích lũy trong hệ thống performance-sensitive).
> `Khó debug`: khi luồng đi qua nhiều adapter, việc lần ra nguồn gốc lỗi phức tạp hơn.
