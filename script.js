$(document).ready(function(){
// Only show the question the user is working on
var totalQuestions = $('.container').size();
var currentQuestion = 0;
$question = $('.container')
$question.hide();
$($question.get(currentQuestion)).fadeIn();
$('.next').click(function(){
  $($question.get(currentQuestion)).fadeOut(function() {
    currentQuestion = currentQuestion + 1;
    if (currentQuestion == totalQuestions) {
      var result = sum_values()
      alert(result);
    } else {
      $($question.get(currentQuestion)).fadeIn();
    }
  })
})
// Show the user how many questions are left
// Check if each question is correct

// Add quiz questions as objects/arrays instead
})
function QuizQuestion(question, choices, correctAnswer) {
    this.question = question;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
}
/* Add new instances of questions:
[
    new QuizQuestion("question", ["choices", "choices"], #),
    new QuizQuestion("question", ["choices", "choices"], #),
    new QuizQuestion("question", ["choices", "choices"], #),
    ...
];

Quiz requirements:
-Requires the user to answer at least five questions
-Shows each question one at a time
-Tells the user each question's number and how many questions remain
-Prevents the user from skipping questions
-Gives the user some way to answer each question
-Compares the user's answer, and the correct answer to determine a score
-Displays the user's final score once all questions have been answered
-Allows the user to start a new game once all questions have been answered
-Uses objects to represent the questions and answers
