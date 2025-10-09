# GitHub Copilot Instructions

## Project Overview
Interactive Python quiz platform built as a static site for GitHub Pages. Uses a **shared engine architecture** where one quiz engine (`assets/js/quiz-engine.js`) powers multiple independent quizzes, each with external data files.

## Architecture & Key Patterns

### Modular Quiz Structure
```
assets/
  css/quiz-styles.css      # Shared styles (4.6 KB) - ONE source of truth
  js/quiz-engine.js        # Core engine (9 KB) - Reusable across ALL quizzes
quizzes/
  {quiz-name}/
    index.html             # Minimal HTML (~4.3 KB) - NO embedded CSS/JS
    data.js                # Quiz questions only
    README.md              # Quiz documentation
```

**Critical**: HTML files must ONLY reference external assets via relative paths:
- CSS: `<link rel="stylesheet" href="../../assets/css/quiz-styles.css">`
- Quiz data: `<script src="./data.js"></script>`
- Engine: `<script src="../../assets/js/quiz-engine.js"></script>`
- Init: `<script>QuizApp.init(yourQuizNameData);</script>`

**Never** embed CSS or JavaScript directly in HTML files. This pattern emerged from refactoring to eliminate ~40KB of duplication per quiz.

### Quiz Data Format (Critical Contract)
Each question object must have these exact properties:
```javascript
const yourQuizNameData = [
    {
        question: "Question text (Markdown supported)",
        code: `Python code snippet`,
        options: ["A", "B", "C", "D"],  // Exactly 4 options
        correct: "C",                   // Must match one option exactly (string comparison)
        explanation: "Markdown explanation with **bold**, `code`, links"
    }
];
```

**Why this matters**: The quiz engine uses `option.trim() === correctOption.trim()` for validation. Mismatch breaks scoring.

### Quiz Engine Integration
The engine (`assets/js/quiz-engine.js`) expects:
- DOM IDs defined in `DOM_SELECTORS` constant (e.g., `quiz-container`, `start-btn`)
- Initialization via `QuizApp.init(quizData)` after DOM loads
- External dependencies: Tailwind CSS, Highlight.js, Marked.js (all CDN-loaded)

## Developer Workflows

### Adding a New Quiz
# 1. Copy template (preserves structure)
```bash
cp -r quizzes/template quizzes/your-topic
```

# 2. Edit quizzes/your-topic/data.js
#    - Rename variable: templateQuizData -> yourTopicQuizData
#    - Add questions following exact format above

# 3. Edit quizzes/your-topic/index.html
#    - Update <title> and <h1>
#    - Change init call: QuizApp.init(yourTopicQuizData)

# 4. Add card to index.html (root)
#    Copy existing quiz card, update title/description/link

# 5. Validate (CRITICAL before committing)

```bash
python validation/validate_your_quiz.py  # Create if needed
```

### File Size Verification (Anti-Corruption Check)
After creating/editing quiz HTML files:
```bash
ls -lh quizzes/*/index.html
# All should be ~4.3 KB. If 40+ KB, file is corrupted (embedded code detected)
```

**Historical note**: Initial refactoring had file corruption issues (45KB files with duplicate HTML tags). Always verify size.

### Testing Workflow
```bash
# Open quiz in browser (static files, no build needed)
# For VS Code dev container:
$BROWSER quizzes/your-quiz/index.html

# Validation scripts (run before committing quiz data)
python validation/validate_physics_chemistry.py
```

## Coding Conventions

### JavaScript (Quiz Engine & Data)
- **No semicolons** (codebase uses ASI)
- **Template literals** for multi-line strings (code blocks in questions)
- **Const** for all quiz data arrays
- **JSDoc comments** for functions in engine
- **DOM caching**: Store element references in `state.dom` object to avoid repeated queries

### CSS (Shared Styles)
- **Tailwind classes** for layout (CDN-loaded, no build)
- **Custom CSS** in `quiz-styles.css` for:
  - `.option-card` - Quiz answer buttons with Atom One Dark theme
  - `.feedback-correct/.feedback-incorrect` - Animation classes
  - `.code-block` - Fira Code font for code display
- **BEM-style naming** for custom classes (e.g., `google-bg`, `google-shadow`)

### Python (Validation Scripts)
- **Type hints required** (PEP 484) - matches quiz code style
- **Explicit imports** from `typing` module
- Place in `validation/` directory
- Name as `validate_{quiz_name}.py`

### HTML Structure
- **Spanish language** (`lang="es"`) - all UI text in Spanish
- **Responsive**: Mobile-first with Tailwind `md:` breakpoints
- **Accessibility**: Semantic HTML, proper button roles
- **Three-screen flow**: start-screen → question-screen → result-screen (toggled via `.hidden` class)

## External Dependencies (All CDN, No npm)
- **Tailwind CSS**: https://cdn.tailwindcss.com
- **Highlight.js** (v11.9.0): Python syntax highlighting with Atom One Dark theme
- **Marked.js**: Markdown parsing for questions/explanations
- **Fira Code font**: Monospace font for code blocks
- **Google Fonts**: Montserrat (primary font)

**Important**: Never add package.json or build tools. This is a static site designed for GitHub Pages zero-config deployment.

## Project-Specific Quirks

### Why Two Validation Directories?
Root has legacy `validate_*.py` files; canonical location is `validation/` folder. Use `validation/` for new scripts.

### Markdown in Quiz Data
Questions and explanations support full Markdown (via Marked.js):
- Links: `[text](url)`
- Code: `` `inline code` ``
- Bold: `**text**`
- Lists: `* item` or `1. item`

Rendered HTML is injected with `innerHTML` after `marked.parse()`.

### Code Block Rendering
All option cards are treated as code blocks (even single-letter answers) for visual consistency:
```javascript
button.innerHTML = `<pre><code class="language-python">${escapedCode}</code></pre>`;
hljs.highlightElement(button.querySelector('code'));
```

This design decision creates uniform styling and prevents layout shifts.

### Question Shuffling
Engine shuffles both:
1. Question order: `[...quizData].sort(() => Math.random() - 0.5)`
2. Option order per question: Ensures answers aren't always in same position

## Common Pitfall Prevention

### ❌ Don't Create Quizzes From Scratch
**Wrong**: Creating new HTML file manually → leads to missing DOM IDs, wrong paths, bloat

**Right**: Copy `quizzes/template/` → preserves required structure

### ❌ Don't Embed Code in HTML
**Wrong**: `<style>...</style>` or `<script>const quizData = [...]</script>` in HTML

**Right**: External references only (`<link>`, `<script src="">`)

### ❌ Don't Mismatch Variable Names
HTML init must match data.js export:
```javascript
// data.js
const algorithmsQuizData = [...];

// index.html
QuizApp.init(algorithmsQuizData);  // Names must match exactly
```

### ❌ Don't Skip Validation
Always test quiz logic with Python validation scripts before adding questions. Incorrect answers confuse learners.

## File Organization Philosophy

This project follows **separation of concerns by file type** rather than by feature:
- **Shared code** (engine, styles) → `assets/`
- **Quiz modules** (data, HTML, docs) → `quizzes/{name}/`
- **Tooling** (validation) → `validation/`

**Why not component-based folders?** GitHub Pages simplicity. No build step = straightforward deployment.

## Integration Points

### Root Index ↔ Quiz Pages
`index.html` (root) displays quiz cards with links to `quizzes/{name}/` directories. Each quiz is fully self-contained (can be accessed directly).

### Quiz HTML ↔ Engine
Quiz pages load engine via script tag, then call `QuizApp.init(data)`. Engine handles all:
- State management
- DOM manipulation
- Event handling
- Scoring
- Navigation

### Quiz Data ↔ Validation
Validation scripts import/copy functions from quiz code to verify correctness before publishing. Not automated in CI (manual verification workflow).
