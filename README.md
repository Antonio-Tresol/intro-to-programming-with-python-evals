# 🐍 Python Quiz Hub

Interactive Python quiz platform for learning programming concepts through hands-on practice.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://antonio-tresol.github.io/intro-to-programming-with-python-evals/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Quizzes](https://img.shields.io/badge/Quizzes-5-orange.svg)](#available-quizzes)

## 🎯 Overview

A collection of interactive quizzes designed to test and improve Python programming skills. Built as a static site with zero dependencies, using a shared quiz engine architecture for easy maintenance and scalability.

### Key Features
- ✅ **No build process** - Pure HTML/CSS/JS, GitHub Pages ready
- 🔄 **Modular architecture** - One engine, unlimited quizzes
- 🎨 **Beautiful UI** - Tailwind CSS with syntax highlighting
- 📱 **Responsive design** - Works on mobile and desktop
- 🧪 **Validated answers** - Python scripts ensure correctness
- 🌐 **Markdown support** - Rich formatting in questions/explanations

## 🎓 Available Quizzes

Browse all available quizzes in the [quizzes/](https://antonio-tresol.github.io/intro-to-programming-with-python-evals/) directory or visit the [live site](https://antonio-tresol.github.io/intro-to-programming-with-python-evals/) to see the complete catalog.

---
## 🚀 Quick Start

### For Learners
1. Visit the [live site](https://antonio-tresol.github.io/intro-to-programming-with-python-evals/)
2. Choose a quiz
3. Click "Empezar" and test your knowledge!

### For Contributors
```bash
# Clone the repository
git clone https://github.com/Antonio-Tresol/intro-to-programming-with-python-evals.git
cd intro-to-programming-with-python-evals

# Create a new quiz from template
cp -r quizzes/template quizzes/my-quiz

# Edit the quiz data
# See CONTRIBUTING.md for detailed instructions

# Test locally (open in browser)
open quizzes/my-quiz/index.html
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## 📁 Project Structure

```
.
├── index.html              # Landing page with quiz cards
├── assets/
│   ├── css/
│   │   └── quiz-styles.css # Shared styles (4.6 KB)
│   └── js/
│       └── quiz-engine.js  # Core quiz logic (9 KB)
├── quizzes/
│   ├── quiz_name/ # for each quiz
│   └── template/           # Template for new quizzes
└── validation/
    └── *.py               # Python validation scripts
```

### Architecture Principles
- **Separation of concerns**: Shared code vs. quiz-specific data
- **DRY**: One engine, reused by all quizzes
- **Zero build**: No npm, webpack, or build tools
- **GitHub Pages ready**: Static files deploy automatically

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **Syntax Highlighting**: Highlight.js with Atom One Dark theme
- **Markdown**: Marked.js for rich text formatting
- **Fonts**: Google Fonts (Montserrat), Fira Code (monospace)
- **Validation**: Python 3 with type hints

**No build tools, no package.json, no node_modules** ✨

## 📚 Documentation

- **[.github/copilot-instructions.md](.github/copilot-instructions.md)** - AI agent guide
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to add quizzes
- **[quizzes/template/README.md](quizzes/template/README.md)** - Quiz creation guide
- **[validation/README.md](validation/README.md)** - Answer validation guide

## 🧪 Validation

All quiz answers are validated with Python scripts before publication. Each quiz has a corresponding validation script in the `validation/` folder.

```bash
# Run validation for a specific quiz
python validation/validate_<quiz_name>.py

# Example: Validate physics & chemistry quiz
python validation/validate_physics_chemistry.py
```

See the [validation/](validation/) folder for all available validation scripts.

## 🎨 Creating a Quiz

1. **Copy the template**:
   ```bash
   cp -r quizzes/template quizzes/algorithms
   ```

2. **Edit `data.js`** with your questions:
   ```javascript
   const algorithmsQuizData = [
       {
           question: "What is the time complexity of binary search?",
           code: `def binary_search(arr, target):
       # Implementation here`,
           options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
           correct: "O(log n)",
           explanation: "Binary search divides the search space in half..."
       }
   ];
   ```

3. **Update `index.html`** initialization:
   ```javascript
   QuizApp.init(algorithmsQuizData);
   ```

4. **Add to main menu** (root `index.html`)

5. **Test and validate**

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed steps.

## 🤝 Contributing

We welcome contributions! Whether you want to:
- 🆕 Add a new quiz
- 🐛 Fix bugs
- 📖 Improve documentation
- 🎨 Enhance UI/UX

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Highlight.js** - Syntax highlighting
- **Tailwind CSS** - Styling framework
- **Marked.js** - Markdown parsing
- **Fira Code** - Beautiful monospace font

##  Contact

- **Repository**: [github.com/Antonio-Tresol/intro-to-programming-with-python-evals](https://github.com/Antonio-Tresol/intro-to-programming-with-python-evals)
- **Issues**: [Open an issue](https://github.com/Antonio-Tresol/intro-to-programming-with-python-evals/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Antonio-Tresol/intro-to-programming-with-python-evals/discussions)

---

**Made with ❤️ for Python learners everywhere**