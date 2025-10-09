# 🧪 Local Testing Guide

Complete guide for testing your Python Quiz Hub locally before deploying to GitHub Pages.

## 🎯 Quick Test Checklist

Before deployment, verify:
- [ ] All quizzes load correctly
- [ ] Quiz engine functions properly
- [ ] Syntax highlighting works
- [ ] Navigation between screens works
- [ ] Scoring is accurate
- [ ] Explanations display correctly
- [ ] Responsive design works
- [ ] No console errors
- [ ] All links work
- [ ] Python validation scripts pass

## 🚀 Testing Methods

### Method 1: Simple Browser Opening (Fastest)

For VS Code dev container:
```bash
# Open main landing page
$BROWSER index.html

# Open specific quiz directly
$BROWSER quizzes/data-structures/index.html
$BROWSER quizzes/physics-chemistry/index.html
```

For local development:
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

**Limitations**: Some browsers may block CORS for local files. If you see issues loading external scripts, use Method 2.

### Method 2: Local HTTP Server (Recommended)

#### Using Python (Recommended - Already Installed)

```bash
# Python 3 (most reliable for static sites)
python3 -m http.server 8000

# Then open in browser:
# http://localhost:8000
```

#### Using PHP (If Available)
```bash
php -S localhost:8000
```

#### Using Node.js (If Available)
```bash
# If you have npx
npx http-server -p 8000

# If you have serve
npx serve -p 8000
```

### Method 3: VS Code Live Server Extension

1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Automatically opens at `http://127.0.0.1:5500`

## 📋 Detailed Testing Procedures

### 1. Test Landing Page

```bash
# Start local server
python3 -m http.server 8000

# Open in browser
$BROWSER http://localhost:8000
```

**What to verify:**
- [ ] Page loads without errors
- [ ] Both quiz cards are visible
- [ ] Hover effects work on quiz cards
- [ ] "Comenzar Quiz →" buttons are clickable
- [ ] Links point to correct quiz folders
- [ ] Responsive design works (resize browser)
- [ ] No console errors (F12 → Console tab)

### 2. Test Data Structures Quiz

```bash
# Open the quiz
$BROWSER http://localhost:8000/quizzes/data-structures/
```

**What to verify:**

#### Start Screen
- [ ] Title displays correctly
- [ ] Description is readable
- [ ] "¡Empezar!" button is visible and clickable

#### Question Screen
- [ ] Question counter shows "Pregunta 1 de 18"
- [ ] Score shows "Puntaje: 0"
- [ ] Progress bar is at 0%
- [ ] Question title displays (with Markdown formatting)
- [ ] Python code block displays with syntax highlighting
- [ ] All 4 option cards are visible
- [ ] Options are styled with Atom One Dark theme
- [ ] Code in options uses Fira Code font
- [ ] Hover effects work on options

#### Answer Selection
- [ ] Click on an option
- [ ] Correct option turns green with animation
- [ ] Incorrect option (if selected) turns red with shake
- [ ] All options become disabled
- [ ] Explanation appears below
- [ ] Explanation formatting (Markdown) works
- [ ] Links in explanation are clickable
- [ ] "Siguiente" button appears

#### Progression
- [ ] Click "Siguiente"
- [ ] Next question loads
- [ ] Question counter increments
- [ ] Progress bar updates
- [ ] Score updates (if answer was correct)
- [ ] Previous explanation is hidden

#### Result Screen (after 18 questions)
- [ ] Final score displays correctly
- [ ] "¡Juego Terminado!" message shows
- [ ] Score matches expected (10 points per correct answer)
- [ ] "Jugar de Nuevo" button works
- [ ] Clicking restart resets everything

### 3. Test Physics-Chemistry Quiz

```bash
# Open the quiz
$BROWSER http://localhost:8000/quizzes/physics-chemistry/
```

**Repeat all checks from Data Structures quiz**
- [ ] All 10 questions load correctly
- [ ] Final score is out of 100 (10 questions × 10 points)

### 4. Test Browser Compatibility

Test in multiple browsers if available:

```bash
# Chrome/Chromium
google-chrome http://localhost:8000

# Firefox
firefox http://localhost:8000

# Edge (Windows)
microsoft-edge http://localhost:8000
```

**What to verify:**
- [ ] Layout is consistent
- [ ] Animations work smoothly
- [ ] Fonts load correctly (Montserrat, Fira Code)
- [ ] Colors match design
- [ ] No JavaScript errors

### 5. Test Responsive Design

**Desktop breakpoints to test:**
- [ ] 1920px (Full HD)
- [ ] 1366px (Laptop)
- [ ] 1024px (Tablet landscape)

**Mobile breakpoints to test:**
- [ ] 768px (Tablet portrait)
- [ ] 375px (iPhone)
- [ ] 360px (Android)

**How to test:**
1. Open browser DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M / Cmd+Shift+M)
3. Select different devices or custom sizes
4. Verify layout adapts properly

**What to verify:**
- [ ] Quiz cards stack on mobile
- [ ] Text is readable on small screens
- [ ] Buttons are touch-friendly (>44px)
- [ ] No horizontal scrolling
- [ ] Options grid becomes single column on mobile

### 6. Test Console for Errors

**Open DevTools Console:**
- Chrome/Edge: F12 or Ctrl+Shift+J (Cmd+Opt+J on Mac)
- Firefox: F12 or Ctrl+Shift+K (Cmd+Opt+K on Mac)

**What to check:**
- [ ] No red errors on page load
- [ ] No 404 errors for CSS/JS files
- [ ] No CORS errors
- [ ] No undefined variable errors
- [ ] No warnings about deprecated APIs

**Common errors to watch for:**
```
❌ Failed to load resource: net::ERR_FILE_NOT_FOUND
   → Fix: Check file paths in HTML

❌ Uncaught ReferenceError: QuizApp is not defined
   → Fix: Ensure quiz-engine.js loads before initialization

❌ Uncaught TypeError: Cannot read property 'init' of undefined
   → Fix: Check variable name matches between data.js and index.html
```

### 7. Test Network Performance

**Check resource loading:**
1. Open DevTools → Network tab
2. Reload page (Ctrl+R / Cmd+R)
3. Verify all resources load successfully

**What to verify:**
- [ ] index.html loads (< 10KB)
- [ ] quiz-styles.css loads from assets/ (~5KB)
- [ ] quiz-engine.js loads from assets/ (~9KB)
- [ ] data.js loads from quiz folder
- [ ] Tailwind CSS loads from CDN
- [ ] Highlight.js loads from CDN
- [ ] Marked.js loads from CDN
- [ ] Fonts load from Google Fonts
- [ ] All resources return 200 status

**Expected total page weight:** ~500KB (mostly fonts and CDN libraries)

### 8. Validate Python Scripts

Before deployment, run validation scripts to ensure quiz answers are correct:

```bash
# Validate physics-chemistry quiz
python3 validation/validate_physics_chemistry.py
```

**Expected output:**
```
✅ All validations passed!
```

**If errors occur:**
1. Review the failing test
2. Check the quiz question
3. Verify the correct answer
4. Update either the quiz or validation script
5. Re-run validation

### 9. Test Accessibility

**Keyboard Navigation:**
- [ ] Tab key navigates between interactive elements
- [ ] Enter key activates buttons
- [ ] Focus indicators are visible
- [ ] Logical tab order

**Screen Reader Testing (Optional):**
- [ ] Use built-in screen reader (Windows Narrator, macOS VoiceOver)
- [ ] Verify semantic HTML is read correctly
- [ ] Button labels are descriptive

**Color Contrast:**
- [ ] Text is readable on backgrounds
- [ ] Meets WCAG AA standards
- [ ] Test with browser DevTools Lighthouse

### 10. Lighthouse Audit (Optional but Recommended)

**Run Lighthouse in Chrome DevTools:**
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Select categories: Performance, Accessibility, Best Practices
4. Click "Generate report"

**Target scores:**
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 80+ (not critical for educational app)

## 🔍 Automated Testing Script

Create a quick test script:

```bash
#!/bin/bash
# test-local.sh

echo "🧪 Running Local Tests..."
echo ""

# 1. Check file structure
echo "📁 Checking file structure..."
required_files=(
    "index.html"
    "assets/css/quiz-styles.css"
    "assets/js/quiz-engine.js"
    "quizzes/data-structures/index.html"
    "quizzes/data-structures/data.js"
    "quizzes/physics-chemistry/index.html"
    "quizzes/physics-chemistry/data.js"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ Missing: $file"
        exit 1
    fi
done

echo ""

# 2. Check file sizes (corruption check)
echo "📊 Checking file sizes..."
html_files=(
    "quizzes/data-structures/index.html"
    "quizzes/physics-chemistry/index.html"
)

for file in "${html_files[@]}"; do
    size=$(wc -c < "$file")
    if [ $size -lt 10000 ]; then
        echo "  ✅ $file: ${size} bytes (healthy)"
    else
        echo "  ⚠️  $file: ${size} bytes (possibly corrupted)"
    fi
done

echo ""

# 3. Run Python validations
echo "🐍 Running Python validations..."
if python3 validation/validate_physics_chemistry.py; then
    echo "  ✅ Validation passed"
else
    echo "  ❌ Validation failed"
    exit 1
fi

echo ""

# 4. Start local server
echo "🚀 Starting local server on port 8000..."
echo "   Open: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop server"
python3 -m http.server 8000
```

**Make it executable and run:**
```bash
chmod +x test-local.sh
./test-local.sh
```

## 🐛 Common Issues and Fixes

### Issue: "Failed to load CSS/JS files"
**Cause:** Incorrect relative paths or CORS restrictions

**Fix:**
```bash
# Use local server instead of file:// protocol
python3 -m http.server 8000
```

### Issue: "QuizApp is not defined"
**Cause:** quiz-engine.js not loaded or loaded after initialization

**Fix:** Check script order in HTML:
```html
<!-- This order is critical -->
<script src="./data.js"></script>
<script src="../../assets/js/quiz-engine.js"></script>
<script>
    QuizApp.init(dataStructuresQuizData);
</script>
```

### Issue: "Correct answer not recognized"
**Cause:** String mismatch between `correct` and `options`

**Fix:** Ensure exact match (including whitespace):
```javascript
// This works:
options: ["True", "False"],
correct: "True"

// This breaks:
options: ["True", "False"],
correct: "true"  // ❌ Case mismatch
```

### Issue: "Syntax highlighting not working"
**Cause:** Highlight.js not loaded or code blocks not marked

**Fix:** Verify CDN links in HTML:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
```

## ✅ Pre-Deployment Checklist

Final checks before pushing to GitHub:

- [ ] All quizzes tested locally
- [ ] No console errors
- [ ] Python validation scripts pass
- [ ] File sizes are healthy (<10KB for HTML)
- [ ] Responsive design works
- [ ] All links work
- [ ] Markdown formatting displays correctly
- [ ] Code syntax highlighting works
- [ ] Animations are smooth
- [ ] Browser compatibility checked
- [ ] Lighthouse audit passed (if run)

## 🚀 Deploy When Ready

Once all tests pass:

```bash
# Stage all changes
git add .

# Commit
git commit -m "Add new quiz / Fix issues / Update content"

# Push to GitHub
git push origin main

# GitHub Pages will automatically deploy
# Site will be live at: https://antonio-tresol.github.io/intro-to-programming-with-python-evals/
```

**Deployment takes ~2-5 minutes**

## 📊 Post-Deployment Verification

After GitHub Pages deploys:

1. **Visit the live site**
2. **Test everything again** (same checklist as local)
3. **Check GitHub Pages settings**:
   - Go to repository Settings → Pages
   - Verify source is "main" branch
   - Verify site is published

**Live site URL:**
```
https://antonio-tresol.github.io/intro-to-programming-with-python-evals/
```

## 🔄 Continuous Testing

For ongoing development:

1. **Test after every change**
2. **Run validation scripts before commits**
3. **Check file sizes regularly**
4. **Test on multiple browsers periodically**
5. **Review Lighthouse scores monthly**

---

**Remember:** Local testing prevents broken deployments and ensures a smooth user experience! 🎯
