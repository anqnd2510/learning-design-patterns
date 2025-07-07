# 🎯 learning-design-patterns

Kho học và thực hành các mẫu thiết kế (Design Patterns) thông qua ví dụ thực tế với TypeScript.  
Áp dụng được vào cả back-end và front-end để viết code **mở rộng tốt – dễ bảo trì – ít bug**.

---

## 💡 Cách học Design Patterns hiệu quả

Khi tìm hiểu từng mẫu thiết kế (pattern), cần nắm vững những điểm sau:

1. ❓ **Mục đích của mẫu thiết kế này là gì?**  
2. ❓ **Nó giải quyết vấn đề gì?**  
3. ❓ **Sử dụng khi nào là phù hợp?**  

📌 *Muốn hiểu sâu pattern → hãy viết code sử dụng nó.*

⚠️ **Không lạm dụng pattern!**  
> Đừng cố gắng dùng tất cả pattern vào cùng một hệ thống. Pattern là công cụ – dùng đúng lúc mới phát huy hiệu quả.

---

## 📚 Danh sách các pattern đã học

| Tên Pattern | Thư mục | Trạng thái |
|-------------|---------|------------|
| ✅ Strategy Pattern | [`strategy-pattern/`](./strategy-pattern/) | Đã hoàn thành |
| ⏳ Factory Pattern | `factory-pattern/` | Đang phát triển |
| ⏳ Singleton Pattern | `singleton-pattern/` | Đang phát triển |
| ⏳ Observer Pattern | `observer-pattern/` | Đang phát triển |

---

## 🛠 Công nghệ sử dụng

- ✅ TypeScript
- ✅ Node.js (kèm `ts-node`)
- ✅ Mỗi pattern tách riêng folder dễ chạy – dễ hiểu
- ✅ Format chuẩn: Interface → Concrete → Context → Demo

---

## 📦 Cách chạy ví dụ

1. Cài đặt dependencies nếu chưa có:
```bash
npm install -D ts-node typescript
