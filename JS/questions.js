// Example data
const questions = [
  { id: 1, title: "Question 1", answers: [] },
  { id: 2, title: "Question 2", answers: [] },
  { id: 3, title: "Question 3", answers: [] }
];

// Populate questions list
const questionsList = document.querySelector("#questions-list");
questions.forEach(question => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="question.html?id=${question.id}">${question.title}</a>`;
  questionsList.appendChild(li);
});
