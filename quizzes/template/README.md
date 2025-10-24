# Quiz Template

This folder contains a template for creating new quizzes.

## 📋 How to Create a New Quiz

### Step 1: Copy the Template
```bash
cp -r quizzes/template quizzes/your-quiz-name
cd quizzes/your-quiz-name
```

### Step 2: Edit `data.js`
1. Rename the variable from `templateQuizData` to your quiz name (e.g., `algorithmsQuizData`)
2. Set the `randomize` flag:
   - `false` for educational progression (questions build sequentially)
   - `true` for assessment mode (questions appear in random order)
3. Add your questions following this structure:

```javascript
const yourQuizNameData = {
    randomize: false,  // Set based on quiz purpose
    questions: [
        {
            question: "Your question?",
            code: `# Python code here`,
            options: ["A", "B", "C", "D"],
            correct: "C",
            explanation: "Why C is correct..."
        }
    ]
};
```

### Step 3: Edit `index.html`
1. Update the title: `<title>Quiz de Python: Your Title</title>`
2. Update the h1: `<h1>Your Quiz Title</h1>`
3. Update the description: `<p>Your quiz description</p>`
4. Update the init call: `QuizApp.init(yourQuizNameData);`

### Step 4: Add to Main Index
Edit `/index.html` and add a card for your new quiz:

```html
<div class="quiz-card bg-white rounded-2xl shadow-lg overflow-hidden">
    <div class="bg-gradient-to-r from-green-500 to-teal-500 p-6">
        <h2 class="text-3xl font-bold text-white mb-2">
            🎯 Your Quiz Title
        </h2>
        <p class="text-green-100">
            Nivel: Intermediate
        </p>
    </div>
    <div class="p-6">
        <!-- Add description, tags, stats -->
        <a href="quizzes/your-quiz-name/" 
           class="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
            Comenzar Quiz →
        </a>
    </div>
</div>
```

### Step 5: Create README (Optional)
Add a `README.md` in your quiz folder documenting:
- Topic covered
- Difficulty level
- Number of questions
- Prerequisites

## 📝 Question Format

Each question must have:
- `question`: String (Markdown supported)
- `code`: String (Python code snippet)
- `options`: Array of 4 strings
- `correct`: String (must match one option exactly)
- `explanation`: String (Markdown supported)

## 🎨 Customization

You can customize:
- Title and description
- Color scheme (update Tailwind classes)
- Number of questions
- Point values (default is 10 per question)

## ✅ Testing

1. Open `index.html` in a browser
2. Test all questions
3. Verify explanations display correctly
4. Check code syntax highlighting

## 🚀 Deployment

Once your quiz is ready:
1. Commit changes to git
2. Push to GitHub
3. GitHub Pages will automatically deploy
4. Access at: `https://username.github.io/repo/quizzes/your-quiz-name/`

---

Good luck creating your quiz! 🎓
