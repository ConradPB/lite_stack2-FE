// Get question ID from URL
const urlParams = new URLSearchParams(window.location.search);
const questionId = urlParams.get("id");

// Example data
const questions = [
  { id: 1, title: "Question 1", answers: ["Answer 1", "Answer 2"] },
  { id: 2, title: "Question 2", answers: ["Answer 3"] },
  { id: 3, title: "Question 3", answers: [] }
];

// Get question data
const question = questions.find(q => q.id == questionId);

// Set question title
const questionTitle = document.querySelector("#question-title");
questionTitle.textContent = question.title;

// Populate answers list
const answersList = document.querySelector("#answers-list");
question.answers.forEach(answer => {
  const li = document.createElement("li");
  li.textContent = answer;
  answersList.appendChild(li);
});

// Handle add answer form submission
const addAnswerForm = document.querySelector("#add-answer-form");