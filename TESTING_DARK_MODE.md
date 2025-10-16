# 🧪 Dark Mode Testing Guide

## 📋 Checklist Kiểm Tra

### ✅ Test 1: Initial Load (Light Mode)
**Bước:**
1. Xóa localStorage: `localStorage.clear()`
2. Xóa browser cache
3. Reload page (F5)

**Kỳ vọng:**
- ✅ Trang load với Light Mode
- ✅ Không có flash trắng
- ✅ Tất cả text đen, background trắng

**Nếu lỗi:**
- Kiểm tra `index.html` có script không
- Kiểm tra browser console có error không

---

### ✅ Test 2: Toggle to Dark Mode
**Bước:**
1. Click theme toggle button (Moon icon)
2. Quan sát trang thay đổi

**Kỳ vọng:**
- ✅ Trang chuyển sang Dark Mode ngay lập tức
- ✅ Background đen, text trắng
- ✅ Tất cả components thay đổi màu

**Nếu lỗi:**
- Kiểm tra `useTheme` hook được import đúng
- Kiểm tra toggle button onClick handler

---

### ✅ Test 3: Reload in Dark Mode (CRITICAL)
**Bước:**
1. Ở Dark Mode
2. Reload page (F5)

**Kỳ vọng:**
- ✅ Trang vẫn Dark Mode
- ✅ **KHÔNG có flash trắng**
- ✅ Màu sắc đúng từ lúc load

**Nếu lỗi (Flash trắng):**
- Xóa cache: Ctrl+Shift+Delete
- Hard refresh: Ctrl+Shift+R
- Kiểm tra initialization script trong `<head>`

---

### ✅ Test 4: Close & Reopen Browser
**Bước:**
1. Ở Dark Mode
2. Đóng browser hoàn toàn
3. Mở lại web

**Kỳ vọng:**
- ✅ Vẫn Dark Mode
- ✅ localStorage đã lưu theme

---

### ✅ Test 5: Mobile Responsive
**Bước:**
1. Mở DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test theme toggle trên mobile view

**Kỳ vọng:**
- ✅ Theme toggle button hiển thị
- ✅ Theme thay đổi đúng
- ✅ Responsive layout không bị lỗi

---

### ✅ Test 6: Toast Notifications
**Bước:**
1. Trigger toast notification (nếu có)
2. Chuyển theme
3. Quan sát toast

**Kỳ vọng:**
- ✅ Toast tự động thay đổi màu
- ✅ Text vẫn readable

---

### ✅ Test 7: System Preference
**Bước:**
1. Xóa localStorage: `localStorage.clear()`
2. Đổi OS theme (Windows/Mac settings)
3. Reload page

**Kỳ vọng:**
- ✅ Web tự động theo OS theme
- ✅ Nếu OS là Dark → Web Dark
- ✅ Nếu OS là Light → Web Light

---

## 🔧 DevTools Commands

### **Check Current Theme**
```javascript
// Console
document.documentElement.classList.contains('dark') ? 'dark' : 'light'
```

### **Check localStorage**
```javascript
localStorage.getItem('theme')
```

### **Manually Set Theme**
```javascript
// Set to dark
document.documentElement.classList.add('dark');
localStorage.setItem('theme', 'dark');

// Set to light
document.documentElement.classList.remove('dark');
localStorage.setItem('theme', 'light');
```

### **Clear All**
```javascript
localStorage.clear();
location.reload();
```

### **Check CSS Variables**
```javascript
// Get a CSS variable value
getComputedStyle(document.documentElement).getPropertyValue('--background')
```

---

## 📊 Expected CSS Variables

### **Light Mode**
```
--background: 0 0% 100%        (White)
--foreground: 210 33% 10%      (Dark Blue)
--primary: 161 84% 45%         (Teal)
--card: 0 0% 98%               (Off-white)
```

### **Dark Mode**
```
--background: 216 47% 3%       (Very Dark Blue)
--foreground: 210 33% 96%      (Near White)
--primary: 161 84% 45%         (Teal - same)
--card: 216 45% 6%             (Dark Blue)
```

---

## 🐛 Common Issues & Solutions

### **Issue: Flash of White on Reload**
**Cause:** Initialization script not running
**Solution:**
1. Check `index.html` has script in `<head>`
2. Hard refresh: Ctrl+Shift+R
3. Clear cache: Ctrl+Shift+Delete

### **Issue: Theme Not Persisting**
**Cause:** localStorage not working
**Solution:**
1. Check browser allows localStorage
2. Check DevTools: `localStorage.getItem('theme')`
3. Try incognito mode

### **Issue: Toast Not Changing Theme**
**Cause:** Sonner using wrong theme hook
**Solution:**
1. Check `sonner.tsx` imports `@/hooks/use-theme`
2. Not `next-themes`

### **Issue: System Preference Not Working**
**Cause:** localStorage overriding system preference
**Solution:**
1. Clear localStorage: `localStorage.clear()`
2. Reload page
3. Should use system preference now

---

## ✨ Performance Checklist

- ✅ No console errors
- ✅ No flash of unstyled content
- ✅ Theme toggle instant (< 100ms)
- ✅ localStorage working
- ✅ All components themed correctly
- ✅ Mobile responsive
- ✅ Accessibility maintained

---

## 📝 Files Modified

1. ✅ `index.html` - Added initialization script
2. ✅ `client/hooks/use-theme.tsx` - Improved theme provider
3. ✅ `client/components/ui/sonner.tsx` - Fixed import

**Total changes: 3 files**
**Lines added: ~40**
**Breaking changes: None**

---

## 🎉 Success Criteria

All tests pass when:
- ✅ No flash on reload
- ✅ Theme persists after reload
- ✅ Theme toggle works instantly
- ✅ System preference respected
- ✅ All components themed
- ✅ Mobile responsive
- ✅ No console errors

