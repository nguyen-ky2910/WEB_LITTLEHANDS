# Little Hands Recap Website

Website one-page lưu lại hành trình dự án **Little Hands – Second-Hand & Mini Decor Charity Fundraising Project** của Group 02, SSG105, FPT University.

## Nội dung

- Hero, câu chuyện dự án và số liệu nổi bật
- Timeline hành trình
- Gallery 10 ảnh đã chọn, có bộ lọc và lightbox
- Vệt Sáng
- Kết quả tài chính và quyên góp
- Danh sách 9 thành viên
- Responsive cho điện thoại và máy tính

## Chạy thử

Website tĩnh, không cần cài package. Mở `index.html` hoặc chạy:

```bash
python -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`.

## Deploy nhanh

### GitHub Pages
1. Upload toàn bộ file trong thư mục này lên repository.
2. Vào **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main`, folder: `/ (root)`.
5. Nhấn **Save**.

Link dự kiến:
`https://myNameDyK.github.io/littlehand/`

### Netlify Drop
Kéo toàn bộ thư mục hoặc file ZIP vào Netlify Drop để nhận URL public ngay.

## Cập nhật

- Ảnh: `assets/images/`
- Gallery và caption: `app.js`
- Nội dung trang: `index.html`
- Giao diện: `styles.css`
- Link Vệt Sáng: tìm `cosmic-hearts-echo.lovable.app` trong `index.html`

> Trước khi đăng biên lai hoặc chứng nhận quyên góp, cần che số tài khoản và thông tin cá nhân nhạy cảm.
