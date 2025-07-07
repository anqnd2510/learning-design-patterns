STRATEGY PATTERN:

- Mục đích của Strategy Pattern là gì?
  Mục đích của Strategy Pattern là tách rời thuật toán (hoặc hành vi) khỏi đối tượng sử dụng nó, giúp bạn dễ dàng thay đổi hoặc mở rộng thuật toán mà không cần sửa đổi đối tượng chính.
- Nó giải quyết vấn đề gì?
  Nó giải quyết vấn đề khi một lớp có nhiều hành vi tương tự nhau nhưng khác về chi tiết thực hiện (ví dụ: nhiều cách sắp xếp, thanh toán, hoặc tính thuế), thay vì dùng nhiều câu lệnh if/else hoặc switch, Strategy cho phép đóng gói từng hành vi thành một class riêng.
- Có thể sử dụng nó khi nào?
  Sử dụng khi bạn cần:
  Có nhiều thuật toán khác nhau cho cùng một nhiệm vụ.
  Cần thay đổi thuật toán dễ dàng tại runtime.
  Muốn tránh sử dụng if/else phức tạp và muốn tuân theo nguyên tắc Open/Closed (mở rộng mà không sửa đổi).
