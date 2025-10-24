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
    reviewScreen: 'review-screen',
    startBtn: 'start-btn',
    restartBtn: 'restart-btn',
    restartFromReviewBtn: 'restart-from-review-btn',
    reviewBtn: 'review-btn',
    homeBtn: 'home-btn',
    nextBtn: 'next-btn',
    questionCounter: 'question-counter',
    score: 'score',
    progressBar: 'progress-bar',
    questionTitle: 'question-title',
    codeSnippet: 'code-snippet',
    optionsContainer: 'options-container',
    explanationContainer: 'explanation-container',
    finalScore: 'final-score',
    reviewContainer: 'review-container',
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
        userAnswers: [],
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
        
        // Review and home buttons
        if (this.state.dom.reviewBtn) {
            this.state.dom.reviewBtn.addEventListener('click', () => this.showReviewScreen());
        }
        if (this.state.dom.restartFromReviewBtn) {
            this.state.dom.restartFromReviewBtn.addEventListener('click', () => this.start());
        }
        if (this.state.dom.homeBtn) {
            this.state.dom.homeBtn.addEventListener('click', () => this.returnToHome());
        }
    },

    /**
     * Starts or restarts the quiz.
     * Resets state, shuffles questions, and shows the first question.
     */
    start() {
        this.state.score = 0;
        this.state.currentQuestionIndex = 0;
        this.state.userAnswers = [];
        this.state.questions = [...this.quizData].sort(() => Math.random() - 0.5);

        this.updateScreen(this.state.dom.questionScreen, [this.state.dom.startScreen, this.state.dom.resultScreen, this.state.dom.reviewScreen]);
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
        const questionData = this.state.questions[this.state.currentQuestionIndex];
        const isCorrect = selectedOption.trim() === correctOption.trim();
        
        // Store user answer
        this.state.userAnswers.push({
            questionText: questionData.question,
            codeSnippet: questionData.code,
            userChoice: selectedOption,
            correctAnswer: correctOption,
            isCorrect: isCorrect,
            explanation: questionData.explanation,
            options: questionData.options
        });
        
        // Disable all option buttons
        Array.from(dom.optionsContainer.children).forEach(btn => {
            btn.disabled = true;
            btn.style.cursor = 'not-allowed';
        });

        if (isCorrect) {
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
     * Displays the review screen with all user answers.
     */
    showReviewScreen() {
        const { dom, userAnswers } = this.state;
        
        if (!dom.reviewContainer) {
            console.error('Review container not found');
            return;
        }
        
        // Clear previous content
        dom.reviewContainer.innerHTML = '';
        
        // Render each answer
        userAnswers.forEach((answer, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item', answer.isCorrect ? 'review-correct' : 'review-incorrect');
            
            // Question header
            const header = document.createElement('div');
            header.classList.add('review-header');
            header.innerHTML = `
                <div class="flex items-center justify-between mb-2">
                    <span class="font-bold text-lg">Pregunta ${index + 1}</span>
                    <span class="text-2xl">${answer.isCorrect ? '✓' : '✗'}</span>
                </div>
            `;
            reviewItem.appendChild(header);
            
            // Question text
            const questionText = document.createElement('div');
            questionText.classList.add('mb-4');
            questionText.innerHTML = marked.parse(answer.questionText);
            reviewItem.appendChild(questionText);
            
            // Code snippet if present
            if (answer.codeSnippet) {
                const codeDiv = document.createElement('div');
                codeDiv.classList.add('mb-4', 'code-block');
                const escapedCode = answer.codeSnippet.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                codeDiv.innerHTML = `<pre><code class="language-python">${escapedCode}</code></pre>`;
                reviewItem.appendChild(codeDiv);
                hljs.highlightElement(codeDiv.querySelector('code'));
            }
            
            // User's answer
            const userAnswerDiv = document.createElement('div');
            userAnswerDiv.classList.add('mb-2');
            userAnswerDiv.innerHTML = `<strong>Tu respuesta:</strong> <code class="bg-gray-100 px-2 py-1 rounded">${answer.userChoice}</code>`;
            reviewItem.appendChild(userAnswerDiv);
            
            // Correct answer if user was wrong
            if (!answer.isCorrect) {
                const correctAnswerDiv = document.createElement('div');
                correctAnswerDiv.classList.add('mb-2');
                correctAnswerDiv.innerHTML = `<strong>Respuesta correcta:</strong> <code class="bg-green-100 px-2 py-1 rounded">${answer.correctAnswer}</code>`;
                reviewItem.appendChild(correctAnswerDiv);
            }
            
            // Explanation
            const explanationDiv = document.createElement('div');
            explanationDiv.classList.add('mt-4', 'pt-4', 'border-t', 'border-gray-300');
            explanationDiv.innerHTML = `<strong>Explicación:</strong><div class="mt-2">${marked.parse(answer.explanation)}</div>`;
            reviewItem.appendChild(explanationDiv);
            
            dom.reviewContainer.appendChild(reviewItem);
        });
        
        this.updateScreen(dom.reviewScreen, [dom.resultScreen]);
    },
    
    /**
     * Returns to the home page.
     */
    returnToHome() {
        window.location.href = '../../index.html';
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
