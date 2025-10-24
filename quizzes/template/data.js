/**
 * @file Template Quiz Data
 * @description Template for creating new quiz data files
 * 
 * INSTRUCTIONS:
 * 1. Copy this file to your quiz folder
 * 2. Rename the variable (e.g., myTopicQuizData)
 * 3. Set randomize: true/false based on whether questions should be shuffled
 *    - true: Questions appear in random order (assessment/verification)
 *    - false: Questions appear in order (educational progression)
 * 4. Add your questions following the structure below
 * 5. Update the index.html to reference your variable name
 */

const templateQuizData = {
    randomize: true,  // Set to false for educational progression, true for assessment
    questions: [
        {
            question: "Your question text here? You can use **Markdown** for *formatting*.",
            code: `# Python code goes here
def example_function(x: int) -> int:
    return x * 2`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: "Option B",  // Must match exactly one of the options
            explanation: `
Your detailed explanation goes here. You can use:
* **Markdown** formatting
* Code snippets: \`variable_name\`
* Lists and [links](https://example.com)

Explain step by step why the answer is correct.
`
        },
        {
            question: "Second question example?",
        code: `# Another code example
from typing import List

def process_list(items: List[int]) -> List[int]:
    return [x * 2 for x in items if x > 0]`,
        options: [
            "[2, 4, 6]",
            "[1, 2, 3]",
            "[]",
            "Error"
        ],
        correct: "[2, 4, 6]",
        explanation: `
This function:
1. Filters positive numbers
2. Multiplies each by 2
3. Returns the result

Given input \`[1, 2, 3]\`, the output is \`[2, 4, 6]\`.
`
        }
        // Add more questions here...
    ]
}
