// Example data
const user = {
  id: 1,
  name: "User",
  questions: [1, 2],
  answers: [1, 2, 3]
};
const questions = [
  { id: 1, title: "Question 1", answers: ["Answer 1", "Answer 2"] },
  { id: 2, title: "Question 2", answers: ["Answer 3"] },
  { id: 3, title: "Question 3", answers: [] }
];

// Set profile data
const numQuestions = document.querySelector("#num-questions");
numQuestions.textContent = user.questions.length;

const numAnswers = document.querySelector("#num-answers");
numAnswers.textContent = user.answers.length;

// Populate questions with most answers list
const mostAnswersList = document.querySelector("#most-answers-list");
const sortedQuestions = [...questions].sort((a, b) => b.answers.length - a.answers.length);
sortedQuestions.slice(0, 3).forEach(question => {
  const li = document.createElement("li");
  li.textContent = question.title;
  mostAnswersList.appendChild(li);
});

// Populate recent questions list
const recentQuestionsList = document.querySelector("#recent-questions-list");
user.questions.slice(-3).forEach(questionId => {
  const question = questions.find(q => q.id == questionId);
  const li = document.createElement("li");
  li.textContent = question.title;
  recentQuestionsList.appendChild(li);
});