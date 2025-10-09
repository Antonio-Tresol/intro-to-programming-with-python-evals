# ✅ Local Testing - Quick Reference

## 🚀 Quick Start (3 Steps)

### 1. Run Automated Tests
```bash
./test-local.sh
```

Expected output:
```
✅ All checks passed!
🚀 Ready to start local server
```

### 2. Start Local Server
```bash
python3 -m http.server 8000
```

Server will start at: **http://localhost:8000**

### 3. Open in Browser
```bash
# In VS Code dev container
$BROWSER http://localhost:8000

# Or manually open: http://localhost:8000
```

## 📋 What Gets Tested

The `test-local.sh` script automatically checks:
- ✅ All required files exist
- ✅ HTML files are healthy size (~4KB, not corrupted)
- ✅ No embedded CSS/JS (using external files correctly)
- ✅ External file references are correct
- ✅ Python validation scripts pass

## 🧪 Manual Testing Checklist

Once server is running, manually verify:

### Landing Page (http://localhost:8000)
- [ ] Both quiz cards visible
- [ ] Hover effects work
- [ ] Links to quizzes work

### Data Structures Quiz (http://localhost:8000/quizzes/data-structures/)
- [ ] 18 questions load
- [ ] Syntax highlighting works
- [ ] Answer selection works
- [ ] Explanations display
- [ ] Scoring is accurate
- [ ] "Siguiente" button advances

### Physics-Chemistry Quiz (http://localhost:8000/quizzes/physics-chemistry/)
- [ ] 10 questions load
- [ ] All features work as expected

### Browser DevTools (F12)
- [ ] No console errors
- [ ] All resources load (Network tab)
- [ ] No 404 errors

## 🐛 Common Issues

### Server won't start
```bash
# Port 8000 might be in use, try another port:
python3 -m http.server 8001
```

### Can't see changes
```bash
# Hard refresh browser:
# Ctrl+Shift+R (Windows/Linux)
# Cmd+Shift+R (Mac)
```

### Quiz doesn't load
```bash
# Check file paths in index.html
# Verify quiz-engine.js and data.js load
# Check browser console for errors
```

## 🎯 Ready to Deploy?

If all tests pass:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Pages will deploy automatically in 2-5 minutes.

## 📞 Need Help?

See full testing guide: **[TESTING.md](TESTING.md)**

---

**Current Status**: 
- ✅ Local server running on port 8000
- ✅ All automated tests passed
- ⏳ Ready for manual browser testing
