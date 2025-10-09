#!/bin/bash
# Local Testing Script for Python Quiz Hub

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
    "quizzes/template/index.html"
    "quizzes/template/data.js"
)

all_files_exist=true
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ Missing: $file"
        all_files_exist=false
    fi
done

if [ "$all_files_exist" = false ]; then
    echo ""
    echo "❌ Some required files are missing!"
    exit 1
fi

echo ""

# 2. Check file sizes (corruption check)
echo "📊 Checking HTML file sizes (corruption detection)..."
html_files=(
    "quizzes/data-structures/index.html"
    "quizzes/physics-chemistry/index.html"
    "quizzes/template/index.html"
)

all_sizes_ok=true
for file in "${html_files[@]}"; do
    size=$(wc -c < "$file")
    if [ $size -lt 10000 ]; then
        echo "  ✅ $file: ${size} bytes (healthy)"
    else
        echo "  ⚠️  $file: ${size} bytes (possibly corrupted - should be ~4-5KB)"
        all_sizes_ok=false
    fi
done

if [ "$all_sizes_ok" = false ]; then
    echo ""
    echo "⚠️  Warning: Some HTML files may be corrupted!"
fi

echo ""

# 3. Check for embedded code (anti-pattern detection)
echo "🔍 Checking for embedded code (should use external files)..."
embedded_code_found=false

for file in "${html_files[@]}"; do
    if grep -q "<style>" "$file" 2>/dev/null; then
        echo "  ⚠️  $file contains embedded <style> tags"
        embedded_code_found=true
    fi
    
    if grep -q "const.*QuizData = \[" "$file" 2>/dev/null; then
        echo "  ⚠️  $file contains embedded quiz data"
        embedded_code_found=true
    fi
done

if [ "$embedded_code_found" = false ]; then
    echo "  ✅ No embedded code found (using external files correctly)"
fi

echo ""

# 4. Verify external references
echo "🔗 Verifying external file references..."
for file in "${html_files[@]}"; do
    if grep -q "quiz-styles.css" "$file" && \
       grep -q "quiz-engine.js" "$file" && \
       grep -q "./data.js" "$file"; then
        echo "  ✅ $file has correct external references"
    else
        echo "  ❌ $file missing some external references"
    fi
done

echo ""

# 5. Run Python validations
echo "🐍 Running Python validation scripts..."
if [ -f "validation/validate_physics_chemistry.py" ]; then
    if python3 validation/validate_physics_chemistry.py 2>&1 | grep -q "✅"; then
        echo "  ✅ Physics-Chemistry validation passed"
    else
        echo "  ⚠️  Physics-Chemistry validation issues detected"
    fi
else
    echo "  ⚠️  Validation script not found"
fi

echo ""

# 6. Summary
echo "═══════════════════════════════════════════"
echo "📋 TEST SUMMARY"
echo "═══════════════════════════════════════════"

if [ "$all_files_exist" = true ] && [ "$all_sizes_ok" = true ] && [ "$embedded_code_found" = false ]; then
    echo "✅ All checks passed!"
    echo ""
    echo "🚀 Ready to start local server"
    echo ""
    echo "Run one of these commands:"
    echo "  • python3 -m http.server 8000"
    echo "  • \$BROWSER index.html"
    echo ""
    echo "Then open: http://localhost:8000"
    exit_code=0
else
    echo "⚠️  Some issues detected - please review above"
    exit_code=1
fi

echo "═══════════════════════════════════════════"
echo ""

exit $exit_code
