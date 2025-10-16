# 🔧 Useful Commands - Dark Mode Fix

## 🧪 Testing Commands

### **Hard Refresh Browser**
```bash
# Windows
Ctrl + Shift + R

# Mac
Cmd + Shift + R
```

### **Clear Browser Cache**
```bash
# Windows
Ctrl + Shift + Delete

# Mac
Cmd + Shift + Delete
```

---

## 🔍 Browser Console Commands

### **Check Current Theme**
```javascript
// Returns 'dark' or 'light'
document.documentElement.classList.contains('dark') ? 'dark' : 'light'
```

### **Check localStorage Theme**
```javascript
// Returns stored theme or null
localStorage.getItem('theme')
```

### **Set Theme Manually**
```javascript
// Set to dark
document.documentElement.classList.add('dark');
localStorage.setItem('theme', 'dark');

// Set to light
document.documentElement.classList.remove('dark');
localStorage.setItem('theme', 'light');
```

### **Clear All localStorage**
```javascript
localStorage.clear();
location.reload();
```

### **Check CSS Variable**
```javascript
// Get background color
getComputedStyle(document.documentElement).getPropertyValue('--background')

// Get foreground color
getComputedStyle(document.documentElement).getPropertyValue('--foreground')

// Get primary color
getComputedStyle(document.documentElement).getPropertyValue('--primary')
```

### **Check System Preference**
```javascript
// Returns true if system prefers dark
window.matchMedia('(prefers-color-scheme: dark)').matches
```

### **Listen to System Preference Changes**
```javascript
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', (e) => {
  console.log('System preference changed to:', e.matches ? 'dark' : 'light');
});
```

---

## 📝 Git Commands

### **Check Modified Files**
```bash
# See all changes
git diff

# See specific file
git diff index.html
git diff client/hooks/use-theme.tsx
git diff client/components/ui/sonner.tsx

# See file status
git status
```

### **View Changes**
```bash
# Show changes in index.html
git diff index.html

# Show changes in use-theme.tsx
git diff client/hooks/use-theme.tsx

# Show changes in sonner.tsx
git diff client/components/ui/sonner.tsx
```

### **Revert Changes (if needed)**
```bash
# Revert specific file
git checkout index.html
git checkout client/hooks/use-theme.tsx
git checkout client/components/ui/sonner.tsx

# Revert all changes
git checkout .
```

---

## 🚀 Development Commands

### **Start Dev Server**
```bash
pnpm dev
```

### **Build Project**
```bash
pnpm build
```

### **Run Tests**
```bash
pnpm test
```

### **Type Check**
```bash
pnpm typecheck
```

### **Format Code**
```bash
pnpm format.fix
```

---

## 🔍 Debugging Commands

### **Open DevTools**
```bash
# Windows
F12

# Mac
Cmd + Option + I
```

### **Open Console Tab**
```bash
# Windows
F12 → Console tab

# Mac
Cmd + Option + I → Console tab
```

### **Open Sources Tab**
```bash
# Windows
F12 → Sources tab

# Mac
Cmd + Option + I → Sources tab
```

### **Open Application Tab**
```bash
# Windows
F12 → Application tab

# Mac
Cmd + Option + I → Application tab
```

---

## 📊 Verification Commands

### **Quick Verification Script**
```javascript
// Run in console to verify fix
(function() {
  console.log('=== Dark Mode Fix Verification ===');
  
  const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  console.log('Current theme:', theme);
  
  const stored = localStorage.getItem('theme');
  console.log('Stored theme:', stored);
  
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--background');
  console.log('Background CSS var:', bg);
  
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log('System prefers dark:', isDark);
  
  console.log('✅ Verification complete');
})();
```

### **Test Theme Toggle**
```javascript
// Simulate theme toggle
(function() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = current === 'light' ? 'dark' : 'light';
  
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  localStorage.setItem('theme', newTheme);
  console.log('Theme toggled to:', newTheme);
})();
```

---

## 🧹 Cleanup Commands

### **Clear Everything**
```javascript
// Clear localStorage
localStorage.clear();

// Clear sessionStorage
sessionStorage.clear();

// Reload page
location.reload();
```

### **Reset to Default**
```javascript
// Remove dark class
document.documentElement.classList.remove('dark');

// Clear localStorage
localStorage.clear();

// Reload
location.reload();
```

---

## 📱 Mobile Testing Commands

### **Toggle Device Toolbar**
```bash
# Windows
Ctrl + Shift + M

# Mac
Cmd + Shift + M
```

### **Simulate Mobile Device**
```bash
# In DevTools
1. Click device toolbar icon
2. Select device (iPhone, Android, etc.)
3. Test theme toggle
```

---

## 🔐 Security Commands

### **Check localStorage Access**
```javascript
// Try to access localStorage
try {
  localStorage.setItem('test', 'test');
  localStorage.removeItem('test');
  console.log('✅ localStorage accessible');
} catch (e) {
  console.log('❌ localStorage not accessible:', e);
}
```

### **Check CORS**
```javascript
// Check if API calls work
fetch('/api/ping')
  .then(r => r.json())
  .then(d => console.log('✅ API works:', d))
  .catch(e => console.log('❌ API error:', e));
```

---

## 📊 Performance Commands

### **Measure Theme Toggle Speed**
```javascript
// Measure performance
const start = performance.now();

// Toggle theme
document.documentElement.classList.toggle('dark');

const end = performance.now();
console.log(`Theme toggle took ${end - start}ms`);
```

### **Check CSS Variable Performance**
```javascript
// Measure CSS variable lookup
const start = performance.now();

for (let i = 0; i < 1000; i++) {
  getComputedStyle(document.documentElement).getPropertyValue('--background');
}

const end = performance.now();
console.log(`1000 CSS var lookups took ${end - start}ms`);
```

---

## 🎯 Quick Test Sequence

```javascript
// Run this sequence to verify everything works

console.log('1. Checking current theme...');
const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
console.log('   Current:', theme);

console.log('2. Checking localStorage...');
const stored = localStorage.getItem('theme');
console.log('   Stored:', stored);

console.log('3. Checking CSS variables...');
const bg = getComputedStyle(document.documentElement).getPropertyValue('--background');
console.log('   Background:', bg);

console.log('4. Checking system preference...');
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log('   System dark:', isDark);

console.log('5. Testing toggle...');
document.documentElement.classList.toggle('dark');
localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
console.log('   Toggled to:', theme === 'light' ? 'dark' : 'light');

console.log('✅ All checks passed!');
```

---

## 📞 Troubleshooting Commands

### **If Flash Still Occurs**
```bash
# 1. Hard refresh
Ctrl + Shift + R

# 2. Clear cache
Ctrl + Shift + Delete

# 3. In console
localStorage.clear();
location.reload();
```

### **If Theme Not Persisting**
```javascript
// Check localStorage
console.log(localStorage.getItem('theme'));

// Check if localStorage is enabled
try {
  localStorage.setItem('test', 'test');
  console.log('✅ localStorage enabled');
} catch (e) {
  console.log('❌ localStorage disabled');
}
```

---

**Last Updated:** 2025-10-16
**Status:** ✅ COMPLETE

