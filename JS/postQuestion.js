// Handle post question form submission
const postQuestionForm = document.querySelector("#post-question-form");

let questions = [];
postQuestionForm.addEventListener("submit", event => {
  event.preventDefault();

  // Get question data
  const questionTitle = document.querySelector("#question-title").value;
  const questionText = document.querySelector("#question-text").value;

  // Add question to data
  // Note: You will need to implement a way to store and retrieve data
  // This is just an example
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
