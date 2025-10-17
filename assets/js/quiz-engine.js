/**
 * @file Quiz Engine - Reusable quiz application logic
 * @description This module handles all quiz logic, state management, and DOM manipulation.
 * It can be used with any quiz data by calling QuizApp.init(quizData).
 */

/**
 * @description Constants for DOM element IDs to avoid magic strings.
 */
const DOM_SELECTORS = {
    quizContainer: 'quiz-container',
    startScreen: 'start-screen',
    questionScreen: 'question-screen',
    resultScreen: 'result-screen',
    startBtn: 'start-btn',
    restartBtn: 'restart-btn',
    nextBtn: 'next-btn',
    questionCounter: 'question-counter',
    score: 'score',
    progressBar: 'progress-bar',
    questionTitle: 'question-title',
    codeSnippet: 'code-snippet',
    optionsContainer: 'options-container',
    explanationContainer: 'explanation-container',
    finalScore: 'final-score',
};

/**
 * @description Constants for CSS classes used for dynamic styling.
 */
const CSS_CLASSES = {
    hidden: 'hidden',
    slideIn: 'slide-in',
    optionCard: 'option-card',
    feedbackCorrect: 'feedback-correct',
    feedbackIncorrect: 'feedback-incorrect',
    feedbackHighlightCorrect: 'feedback-highlight-correct',
    accentBorders: ['border-accent-red', 'border-accent-blue', 'border-accent-yellow', 'border-accent-green'],
};

/**
 * @module QuizApp
 * @description Encapsulates all the logic for the quiz application.
 */
const QuizApp = {
    /**
     * Application state
     * @property {number} score - The user's current score.
     * @property {number} currentQuestionIndex - The index of the current question in the shuffled array.
     * @property {Array<Object>} questions - The shuffled array of question data.
     * @property {Object} dom - References to all necessary DOM elements.
     */
    state: {
        score: 0,
        currentQuestionIndex: 0,
        questions: [],
        dom: {},
    },

    /**
     * Initializes the application with quiz data.
     * Caches DOM elements and sets up event listeners.
     * @param {Array<Object>} quizData - Array of question objects
     */
    init(quizData) {
        this.quizData = quizData;
        // Cache all DOM elements once
        for (const key in DOM_SELECTORS) {
            this.state.dom[key] = document.getElementById(DOM_SELECTORS[key]);
        }
        this.addEventListeners();
    },

    /**
     * Binds all necessary event listeners.
     */
    addEventListeners() {
        this.state.dom.startBtn.addEventListener('click', () => this.start());
        this.state.dom.restartBtn.addEventListener('click', () => this.start());
        this.state.dom.nextBtn.addEventListener('click', () => this.nextQuestion());
    },

    /**
     * Starts or restarts the quiz.
     * Resets state, shuffles questions, and shows the first question.
     */
    start() {
        this.state.score = 0;
        this.state.currentQuestionIndex = 0;
        this.state.questions = [...this.quizData].sort(() => Math.random() - 0.5);

        this.updateScreen(this.state.dom.questionScreen, [this.state.dom.startScreen, this.state.dom.resultScreen]);
        this.renderQuestion();
    },

    /**
     * Renders the current question and its associated UI elements.
     */
    renderQuestion() {
        const questionData = this.state.questions[this.state.currentQuestionIndex];
        const { dom } = this.state;

        // Hide explanation from previous question
        dom.explanationContainer.classList.add(CSS_CLASSES.hidden);
        dom.nextBtn.classList.add(CSS_CLASSES.hidden);

        // Animate question appearance
        const questionContent = dom.questionScreen.querySelector('.question-content');
        questionContent.classList.remove(CSS_CLASSES.slideIn);
        void questionContent.offsetWidth; // Force reflow for animation restart
        questionContent.classList.add(CSS_CLASSES.slideIn);
        
        this.updateProgress();
        
        dom.questionTitle.innerHTML = marked.parse(questionData.question);
        this.renderCode(questionData.code);
        this.renderOptions(questionData.options, questionData.correct);
    },

    /**
     * Updates the score and progress bar.
     */
    updateProgress() {
        const { score, currentQuestionIndex, questions, dom } = this.state;
        const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
        
        dom.score.textContent = `Puntaje: ${score}`;
        dom.progressBar.style.width = `${progressPercentage}%`;
        dom.questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
    },
    
    /**
     * Renders the code snippet with syntax highlighting.
     * @param {string} code - The Python code to display.
     */
    renderCode(code) {
        const { dom } = this.state;
        const escapedCode = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        dom.codeSnippet.innerHTML = `<pre><code class="language-python">${escapedCode}</code></pre>`;
        hljs.highlightElement(dom.codeSnippet.querySelector('code'));
    },
    
    /**
     * Renders the answer options.
     * @param {string[]} options - An array of answer strings.
     * @param {string} correctOption - The correct answer string.
     */
    renderOptions(options, correctOption) {
        const { dom } = this.state;
        dom.optionsContainer.innerHTML = '';
        
        // Shuffle options so they don't appear in the same order every time
        const shuffledOptions = [...options].sort(() => Math.random() - 0.5);

        shuffledOptions.forEach((option, index) => {
            const button = document.createElement('button');
            button.dataset.optionValue = option; 
            
            // UNIFIED RENDERING: Treat all options as code blocks for visual consistency.
            // Convert \n to actual newlines for proper display
            const normalizedOption = option.replace(/\\n/g, '\n');
            const escapedCode = normalizedOption.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            button.innerHTML = `<pre><code class="language-python">${escapedCode}</code></pre>`;
            hljs.highlightElement(button.querySelector('code'));
            
            button.classList.add(
                CSS_CLASSES.optionCard, 'transition',
                CSS_CLASSES.accentBorders[index % 4]
            );
            button.onclick = () => this.handleAnswer(button, option, correctOption);
            dom.optionsContainer.appendChild(button);
        });
    },
    
    /**
     * Handles the user's answer selection.
     * @param {HTMLButtonElement} button - The button element that was clicked.
     * @param {string} selectedOption - The option string selected by the user.
     * @param {string} correctOption - The correct answer string for the question.
     */
    handleAnswer(button, selectedOption, correctOption) {
        const { dom } = this.state;
        
        // Disable all option buttons
        Array.from(dom.optionsContainer.children).forEach(btn => {
            btn.disabled = true;
            btn.style.cursor = 'not-allowed';
        });

        if (selectedOption.trim() === correctOption.trim()) {
            this.state.score += 10;
            dom.score.textContent = `Puntaje: ${this.state.score}`;
            button.classList.add(CSS_CLASSES.feedbackCorrect);
        } else {
            button.classList.add(CSS_CLASSES.feedbackIncorrect);
            // Highlight the correct answer
            Array.from(dom.optionsContainer.children).forEach(btn => {
                if (btn.dataset.optionValue.trim() === correctOption.trim()) {
                   btn.classList.add(CSS_CLASSES.feedbackHighlightCorrect);
                }
            });
        }
        
        this.showExplanation();
    },
    
    /**
     * Displays the explanation for the current question.
     */
    showExplanation() {
        const { dom, questions, currentQuestionIndex } = this.state;
        const explanation = questions[currentQuestionIndex].explanation;
        dom.explanationContainer.innerHTML = `<strong>Explicación:</strong> ${marked.parse(explanation)}`;
        dom.explanationContainer.classList.remove(CSS_CLASSES.hidden);
        dom.nextBtn.classList.remove(CSS_CLASSES.hidden);
    },

    /**
     * Moves to the next question or shows the results screen.
     */
    nextQuestion() {
        this.state.currentQuestionIndex++;
        if (this.state.currentQuestionIndex < this.state.questions.length) {
            this.renderQuestion();
        } else {
            this.showResults();
        }
    },

    /**
     * Displays the final results screen.
     */
    showResults() {
        this.state.dom.finalScore.textContent = this.state.score;
        this.updateScreen(this.state.dom.resultScreen, [this.state.dom.questionScreen]);
    },
    
    /**
     * Helper function to manage screen transitions.
     * @param {HTMLElement} screenToShow - The screen element to display.
     * @param {Array<HTMLElement>} screensToHide - An array of screen elements to hide.
     */
    updateScreen(screenToShow, screensToHide = []) {
        screensToHide.forEach(screen => screen.classList.add(CSS_CLASSES.hidden));
        screenToShow.classList.remove(CSS_CLASSES.hidden);
        screenToShow.classList.add(CSS_CLASSES.slideIn);
    }
};
