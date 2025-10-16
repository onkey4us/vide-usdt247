# ❓ FAQ - Dark Mode Fix

## Q1: Tại sao lại có flash trắng?

**A:** Vì theme được áp dụng **sau khi** CSS load:
1. Browser load HTML
2. CSS load với light mode mặc định
3. User thấy white background
4. React load
5. useTheme hook chạy
6. Theme từ localStorage được áp dụng
7. Trang chuyển sang dark mode

**Solution:** Thêm script trong `<head>` để áp dụng theme **trước** CSS load.

---

## Q2: Script trong `<head>` có ảnh hưởng performance không?

**A:** Không, vì:
- ✅ Script rất nhỏ (~200 bytes)
- ✅ Chạy synchronously (không block rendering)
- ✅ Chỉ đọc localStorage (rất nhanh)
- ✅ Chỉ thêm/xóa class (O(1) operation)
- ✅ Tổng thời gian: < 1ms

**Impact:** Negligible, actually improves UX

---

## Q3: Có thể dùng `prefers-color-scheme` media query thay vì script không?

**A:** Không, vì:
- ❌ Media query chỉ detect system preference
- ❌ Không thể override với user choice
- ❌ Không thể read localStorage
- ❌ Vẫn có flash nếu user chọn theme khác OS

**Script approach:** Tốt hơn vì:
- ✅ Respects user choice (localStorage)
- ✅ Fallback to system preference
- ✅ No flash
- ✅ Flexible

---

## Q4: Tại sao phải có `try-catch` trong script?

**A:** Để handle edge cases:
- ❌ localStorage disabled (private browsing)
- ❌ SSR environment (no document)
- ❌ Unexpected errors

**With try-catch:**
- ✅ Graceful fallback
- ✅ No console errors
- ✅ App still works

---

## Q5: Có thể dùng `next-themes` library không?

**A:** Không recommended vì:
- ❌ Project không dùng Next.js
- ❌ Extra dependency
- ❌ Overkill cho simple use case
- ❌ Custom solution đã đủ tốt

**Custom solution:**
- ✅ Lightweight
- ✅ No dependencies
- ✅ Full control
- ✅ Easy to maintain

---

## Q6: Làm sao để test fix?

**A:** Xem TESTING_DARK_MODE.md, nhưng quick test:
1. Set Dark Mode
2. Reload page (F5)
3. ✅ Should stay dark, no white flash

---

## Q7: Có thể thêm smooth transition không?

**A:** Có, thêm vào `global.css`:
```css
html {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

**Lưu ý:** Có thể gây lag khi toggle theme, tùy preference.

---

## Q8: Nếu vẫn còn flash thì sao?

**A:** Thử các bước này:
1. Hard refresh: Ctrl+Shift+R
2. Clear cache: Ctrl+Shift+Delete
3. Clear localStorage: `localStorage.clear()`
4. Check browser console có error không
5. Kiểm tra script trong `<head>` có đúng không

---

## Q9: Có thể detect theme change từ OS không?

**A:** Có, thêm listener:
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

**Lưu ý:** Chỉ apply nếu user chưa set theme (localStorage empty).

---

## Q10: Có thể thêm theme thứ 3 (e.g., auto) không?

**A:** Có, update code:
```typescript
type Theme = "light" | "dark" | "auto";

const getCurrentTheme = (): Theme => {
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored === 'auto') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  return stored || 'light';
};
```

---

## Q11: Sonner toast không thay đổi theme?

**A:** Kiểm tra:
1. Import đúng: `import { useTheme } from "@/hooks/use-theme"`
2. Không phải `next-themes`
3. useTheme hook được gọi đúng
4. theme prop được pass đúng

---

## Q12: Có thể persist theme preference ở server không?

**A:** Có, nhưng không cần vì:
- ✅ localStorage đã đủ
- ✅ User preference local
- ✅ Không cần database
- ✅ Faster (no network request)

**Nếu muốn:** Thêm API endpoint để save preference.

---

## Q13: Có thể dùng CSS-in-JS (styled-components, etc.) không?

**A:** Có, nhưng CSS variables approach tốt hơn vì:
- ✅ Lightweight
- ✅ No runtime overhead
- ✅ Works with any CSS framework
- ✅ Easy to debug

---

## Q14: Có thể animate theme change không?

**A:** Có, thêm transition:
```css
html {
  transition: background-color 0.3s ease, color 0.3s ease;
}

* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
```

**Lưu ý:** Có thể gây performance issue, test trước.

---

## Q15: Có thể test theme change programmatically không?

**A:** Có:
```javascript
// In console
document.documentElement.classList.add('dark');
localStorage.setItem('theme', 'dark');
location.reload();
```

---

## 🎯 Summary

| Question | Answer |
|----------|--------|
| **Flash white?** | Fixed by initialization script |
| **Performance?** | No impact, actually better |
| **next-themes?** | Not needed, custom solution better |
| **Test?** | Reload in dark mode, check no flash |
| **Smooth transition?** | Optional, add CSS transition |
| **System preference?** | Supported as fallback |
| **Multiple themes?** | Can extend to support more |

---

## 📚 Related Files

- DARK_MODE_FIX.md - Detailed explanation
- TESTING_DARK_MODE.md - Testing guide
- BEFORE_AFTER_COMPARISON.md - Code comparison
- QUICK_START.md - Quick reference
- SUMMARY.md - Complete summary

---

**Last Updated:** 2025-10-16
**Status:** ✅ Complete

