# 🌓 Dark/Light Mode Fix - Complete Guide

## ✅ Các Thay Đổi Đã Thực Hiện

### 1. **index.html** - Thêm Theme Initialization Script
- ✅ Thêm `<script>` tag trong `<head>` để set theme **trước khi React render**
- ✅ Đọc theme từ `localStorage` hoặc system preference
- ✅ Áp dụng `.dark` class ngay lập tức
- ✅ Ngăn chặn FOUC (Flash of Unstyled Content)

### 2. **client/hooks/use-theme.tsx** - Cải Thiện Theme Provider
- ✅ Thêm `getCurrentTheme()` helper - đọc theme từ DOM
- ✅ Thêm `applyThemeToDOM()` helper - áp dụng theme
- ✅ Sync với theme được set bởi initialization script
- ✅ Loại bỏ logic trùng lặp

### 3. **client/components/ui/sonner.tsx** - Fix Import
- ✅ Thay đổi từ `next-themes` → `@/hooks/use-theme`
- ✅ Tương thích với custom theme hook
- ✅ Sonner toast sẽ tự động theo theme

---

## 🧪 Cách Test Fix

### **Test 1: Reload Page (Dark Mode)**
1. Mở web
2. Chuyển sang Dark Mode (click toggle button)
3. **Reload page** (F5 hoặc Cmd+R)
4. ✅ Kỳ vọng: Trang vẫn ở Dark Mode, **không có flash trắng**

### **Test 2: Reload Page (Light Mode)**
1. Chuyển sang Light Mode
2. **Reload page**
3. ✅ Kỳ vọng: Trang vẫn ở Light Mode

### **Test 3: Close & Reopen Browser**
1. Chuyển sang Dark Mode
2. Đóng browser hoàn toàn
3. Mở lại web
4. ✅ Kỳ vọng: Vẫn ở Dark Mode

### **Test 4: Clear localStorage**
1. Mở DevTools (F12)
2. Console: `localStorage.clear()`
3. Reload page
4. ✅ Kỳ vọng: Sử dụng system preference (hoặc light mode mặc định)

### **Test 5: Toast Notifications**
1. Trigger một toast notification
2. Chuyển theme
3. ✅ Kỳ vọng: Toast tự động thay đổi màu theo theme

---

## 🔍 Cách Hoạt Động (Chi Tiết)

### **Timeline Trước Fix:**
```
1. User reload page
2. Browser load HTML
3. CSS load (light mode mặc định)
4. ⚠️ FLASH TRẮNG - User thấy light mode
5. React load & render
6. useTheme hook chạy
7. Theme từ localStorage được áp dụng
8. Trang chuyển sang dark mode
```

### **Timeline Sau Fix:**
```
1. User reload page
2. Browser load HTML
3. ✅ Initialization script chạy ngay
4. ✅ Theme từ localStorage được áp dụng
5. CSS load với đúng theme
6. React load & render
7. useTheme hook sync với DOM
8. ✅ Không có flash - trang đã đúng theme từ đầu
```

---

## 📝 Code Changes Summary

### **index.html**
```html
<!-- NEW: Theme initialization script -->
<script>
  (function() {
    try {
      const storedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = storedTheme || (prefersDark ? 'dark' : 'light');
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.warn('Failed to initialize theme:', e);
    }
  })();
</script>
```

### **use-theme.tsx**
```typescript
// NEW: Helper functions
const getCurrentTheme = (): Theme => {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const applyThemeToDOM = (newTheme: Theme) => {
  const root = document.documentElement;
  if (newTheme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  localStorage.setItem("theme", newTheme);
};

// UPDATED: useEffect - sync với DOM
useEffect(() => {
  const currentTheme = getCurrentTheme();
  setTheme(currentTheme);
  setMounted(true);
}, []);
```

### **sonner.tsx**
```typescript
// CHANGED: next-themes → @/hooks/use-theme
import { useTheme } from "@/hooks/use-theme";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();
  // ...
};
```

---

## ⚠️ Troubleshooting

### **Vẫn còn flash trắng?**
- Xóa browser cache (Ctrl+Shift+Delete)
- Xóa localStorage: `localStorage.clear()`
- Hard refresh: Ctrl+Shift+R (Windows) hoặc Cmd+Shift+R (Mac)

### **Theme không lưu?**
- Kiểm tra localStorage: `localStorage.getItem('theme')`
- Kiểm tra browser console có error không
- Đảm bảo localStorage không bị disable

### **Toast không thay đổi theme?**
- Kiểm tra Sonner import: phải là `@/hooks/use-theme`
- Kiểm tra `useTheme` hook được gọi đúng

---

## 🚀 Next Steps (Optional)

### **Thêm Smooth Transition**
```css
/* global.css */
html {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

### **Thêm System Preference Listener**
```typescript
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleChange = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      applyThemeToDOM(newTheme);
    }
  };
  
  mediaQuery.addEventListener('change', handleChange);
  return () => mediaQuery.removeEventListener('change', handleChange);
}, []);
```

---

## ✨ Summary

| Vấn Đề | Nguyên Nhân | Giải Pháp |
|--------|-----------|----------|
| Flash trắng khi reload | Theme chưa được áp dụng trước React render | Thêm initialization script trong `<head>` |
| Theme không lưu | Logic không sync với DOM | Cải thiện useTheme hook |
| Sonner error | Import sai library | Fix import từ next-themes → custom hook |

**Tất cả đã được fix! 🎉**

