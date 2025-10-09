# Contributing to Python Quiz Hub

Thank you for your interest in contributing! This guide will help you add new quizzes or improve existing ones.

## 🎯 Quick Start

### Prerequisites
- Basic knowledge of HTML, JavaScript, and Python
- Text editor or IDE
- Web browser for testing
- Git for version control

### Your First Quiz

1. **Copy the template**:
   ```bash
   cp -r quizzes/template quizzes/my-quiz-name
   cd quizzes/my-quiz-name
   ```

2. **Edit `data.js`**:
   - Rename the variable from `templateQuizData` to `myQuizNameData`
   - Add your questions (see format below)

3. **Edit `index.html`**:
   - Update the `<title>` tag
   - Update the `<h1>` heading
   - Change the init call to match your data variable name

4. **Add to main menu** (edit root `index.html`):
   - Copy an existing quiz card
   - Update title, description, and link

5. **Test locally**:
   - Open your quiz in a browser
   - Verify all questions work correctly
   - Check code syntax highlighting

6. **Submit**:
   - Create a pull request with your changes

## 📝 Question Format

Each question must follow this exact structure:

```javascript
const myQuizNameData = [
    {
        question: "What will this function return?",  // Can use Markdown
        code: `def example():
    return "Hello"`,                                   // Python code block
        options: [                                     // Always 4 options
            "Hello", 
            "None", 
            "Error", 
            "42"
        ],
        correct: "Hello",                              // Must match one option exactly
        explanation: "The function returns the string 'Hello' because..."  // Markdown supported
    },
    // More questions...
];
```

### Important Rules

- **Exactly 4 options** - No more, no less
- **Correct answer must match exactly** - Case-sensitive, whitespace-sensitive
- **Use Markdown** - For formatting in questions and explanations
- **Python code** - Use template literals (backticks) for multi-line code
- **Keep it educational** - Include clear explanations

## 🎨 Styling Guidelines

### HTML Files
- **DO NOT** embed CSS or JavaScript
- **DO** use external references only
- **DO** maintain the three-screen structure (start/question/result)
- **DO** use Spanish for all UI text

### CSS Customization
If you need custom styles:
1. Add them to `assets/css/quiz-styles.css` (shared)
2. Or create quiz-specific CSS and link it in your HTML
3. Follow existing naming conventions
4. Use Tailwind classes when possible

### JavaScript
- Use modern ES6+ features
- Follow the existing code style (no semicolons)
- Add JSDoc comments for complex functions
- Keep quiz data separate from logic

## ✅ Quality Checklist

Before submitting your quiz:

- [ ] All questions have exactly 4 options
- [ ] Correct answers match options exactly
- [ ] Code snippets are valid Python
- [ ] Explanations are clear and educational
- [ ] Markdown formatting works correctly
- [ ] File size is ~4-5 KB (HTML files)
- [ ] No embedded CSS or JavaScript
- [ ] Tested in at least one browser
- [ ] README.md documents the quiz
- [ ] Created validation script (optional but recommended)

## 🧪 Validation Scripts

Validation scripts ensure quiz answers are correct. Create one for your quiz:

```python
# validation/validate_my_quiz.py
from typing import List

def test_question_1():
    """Test the first question's answer"""
    # Copy the function from your quiz
    def example():
        return "Hello"
    
    # Verify the answer
    result = example()
    assert result == "Hello", f"Expected 'Hello', got {result}"
    print("✅ Question 1 validated")

if __name__ == "__main__":
    test_question_1()
    print("✅ All validations passed!")
```

Run it before submitting:
```bash
python validation/validate_my_quiz.py
```

## 📊 File Size Guidelines

| File Type | Expected Size | Why |
|-----------|--------------|-----|
| `index.html` | ~4-5 KB | Minimal structure, external refs only |
| `data.js` | Varies | Depends on question count (~1 KB per question) |
| `quiz-engine.js` | ~9 KB | Shared across all quizzes |
| `quiz-styles.css` | ~4.6 KB | Shared styles |

**Warning**: If your `index.html` is over 10 KB, you likely have embedded code. Use external files instead.

## 🌳 Project Structure

```
.
├── index.html              # Main landing page (add your quiz card here)
├── assets/
│   ├── css/
│   │   └── quiz-styles.css # Shared styles - edit if needed
│   └── js/
│       └── quiz-engine.js  # Core engine - rarely needs changes
├── quizzes/
│   ├── your-quiz/          # Your quiz folder
│   │   ├── index.html      # Quiz page
│   │   ├── data.js         # Quiz questions
│   │   └── README.md       # Quiz documentation
│   └── template/           # Copy this to start
└── validation/
    └── validate_your_quiz.py  # Your validation script
```

## 🚀 Deployment

The site deploys automatically to GitHub Pages when changes are pushed to `main`:
- No build process required
- All files are static
- Changes appear within minutes

Your quiz will be available at:
```
https://{username}.github.io/{repo}/quizzes/your-quiz/
```

## 🐛 Common Issues

### Quiz doesn't load
- Check browser console for errors
- Verify all script/link paths are correct
- Ensure variable names match between data.js and index.html

### Options not highlighting
- Verify Highlight.js is loading from CDN
- Check that code blocks use `language-python` class

### Correct answer not recognized
- Compare your `correct` value with options using `===`
- Check for extra whitespace or quotes
- Ensure exact string match (case-sensitive)

### File corruption (45+ KB HTML)
- You embedded code instead of using external files
- Delete and recreate from template
- Verify with: `ls -lh quizzes/*/index.html`

## 💡 Best Practices

### Educational Value
- Focus on teaching, not just testing
- Include detailed explanations
- Link to resources for learning more
- Cover edge cases in questions

### Code Quality
- Use type hints in Python examples
- Follow PEP 8 style
- Keep code examples concise
- Use meaningful variable names

### Accessibility
- Use semantic HTML
- Provide alt text for images (if any)
- Ensure sufficient color contrast
- Test with keyboard navigation

### Performance
- Keep quiz data reasonable (~10-20 questions ideal)
- Use CDN resources (already cached by browsers)
- Optimize any custom images

## 📞 Getting Help

- **Questions**: Open an issue with the `question` label
- **Bugs**: Open an issue with the `bug` label
- **Feature ideas**: Open an issue with the `enhancement` label
- **Documentation**: Check existing READMEs and `.github/copilot-instructions.md`

## 📜 Code of Conduct

- Be respectful and constructive
- Focus on educational content
- Keep quizzes appropriate for all ages
- Credit sources when using external material
- Follow licensing requirements

## 🎓 Example Quizzes

Study these for reference:
- **Data Structures** (`quizzes/data-structures/`) - Comprehensive, 18 questions
- **Physics & Chemistry** (`quizzes/physics-chemistry/`) - Applied Python, 10 questions
- **Template** (`quizzes/template/`) - Minimal example to copy

## 🔄 Making Changes to Existing Quizzes

1. Create a branch: `git checkout -b fix/quiz-name`
2. Make your changes
3. Test thoroughly
4. Create validation script to verify answers
5. Submit PR with description of changes

## 📦 Adding Dependencies

**DO NOT** add npm packages or build tools. This project intentionally uses:
- CDN-hosted libraries (Tailwind, Highlight.js, Marked.js)
- No build step
- No package.json
- Pure static files

**Why?** Simplicity and GitHub Pages compatibility.

## 🙏 Thank You!

Your contributions help others learn Python. Every quiz, fix, or improvement makes a difference!

---

**Ready to contribute?** Start with copying the template and let your creativity flow! 🚀
