// Handle post question form submission
const postQuestionForm = document.querySelector("#post-question-form");

let questions = [];
postQuestionForm.addEventListener("submit", event => {
  event.preventDefault();

  // Get question data
  const questionTitle = document.querySelector("#question-title").value;
  const questionText = document.querySelector("#question-text").value;

  const newQuestion = {
    id: Date.now(),
    title: questionTitle,
    text: questionText,
    answers: []
  };
  questions.push(newQuestion);

  // Clear form
  postQuestionForm.reset();
});
