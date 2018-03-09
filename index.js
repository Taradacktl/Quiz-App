const questions = [
	{
		title: 'How old are hens when they start laying eggs?',
		correctAnswer: '6 months',
		answers: ['4 months', '6 months', '8 months', '12 months'],
	},
	{
		title: 'What colors can egg shells NOT be?',
		correctAnswer: 'red',
		answers: ['brown', 'blue', 'white', 'red'],
	},
	{
		title: 'On average how many toes does a chicken have?',
		correctAnswer: '4-5',
		answers: ['2-3', '3-4', '4-5', '5-6'],
	},
	{
		title: 'What stimulates a hen to lay eggs?',
		correctAnswer: 'light',
		answers: ['warmth', 'light', 'other chickens', 'roosters'],
	},
	{
		title: 'The purpose of the chalazae (white "string" found in an egg) ...',
		correctAnswer: 'to suspend the yolk in place during chick development',
		answers: [
			'serves as the umbilical cord',
			'beginning of leg development',
			'to suspend the yolk in place during chick development',
			'the start of the spinal column'],
	},
	{
		title:
			'The ______ of an egg contains most of the vitamins and half of the protein found in an egg.',
		correctAnswer: 'yolk',
		answers: ['white', 'yolk', 'shell', 'chalazae'],
	},
	{
		title:
			'What percentage of chicken owners have chickens as a source of garden helpers?',
		correctAnswer: '63%',
		answers: ['33%', '43%', '53%', '63%'],
	},
	{
		title: 'A chicken house is called a ...',
		correctAnswer: 'coop',
		answers: ['cage', 'pen', 'coop', 'nest box'],
	},
	{
		title: 'Egg production can take up to ... ',
		correctAnswer: '24-26 hours',
		answers: ['6-8 hours', '10-12 hours', '20-22 hours', '24-26 hours'],
	},
	{
		title: 'Which of the following is NOT true',
		correctAnswer: 'Chickens do not feel pain',
		answers: [
			'Chickens have full color vision',
			'Chickens dream when they sleep',
			'Chickens have a great memory',
			'Chickens do not feel pain',
		],
	}, 
];

let score = 0;
let questionNumber = 1;
let currentQuestionIndex = 0;
let q = questions[currentQuestionIndex];

//Beginning screen
function startScreen() {
	$('.quizPage').html(
		`<h1>Are you a chicken expert?</h1>
      <button class="start">Start quiz!</button>`
	);
}

//Click start to begin
function startButton() {
	$('.quizPage').on('click', '.start', function(event) {
	   $(".status").show();
	  startBackground();
		startQuiz();
		
	});
}

//Change background when quiz begins
function startBackground () {
  document.body.style.backgroundImage = "url('https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAl_AAAAJDA1NjYwN2I1LTRhM2UtNDk1YS05ZTRlLWYwOWEwYjEzOGM5Zg.jpg')";
}

//Checks current question index and displays questions, status, or shows end results 
function startQuiz() {
	if (currentQuestionIndex < questions.length) {
		displayScoreAndQuestionNumber();
		displayQuestion();
	} else {
		displayResultsPage();
	}
}

//Format of displaying questions and submit button
function displayQuestion() {
	q = questions[currentQuestionIndex];

	$('.quizPage').html(
		`<form name="quiz">
      <h1>${q.title}</h1>
      <div class= "box">
      <div class="answerBox">     
          <label><input value="${q.answers[0]}" class="answer" type="radio" name="answer" required>
            <span>${q.answers[0]}</span></label>
       
          <label><input value="${q.answers[1]}" class="answer" type="radio" name="answer">
            <span>${q.answers[1]}</span></label>
       
          <label><input value="${q.answers[2]}" class="answer" type="radio" name="answer">
            <span>${q.answers[2]}</span></label>
       
          <label><input value="${q.answers[3]}" class="answer" type="radio" name="answer">
        <span>${q.answers[3]}</span></label>
      </div>
      <button type="submit" class="submitButton">Submit</button>
      </div>
    </form>`
	);
  submitButton();
}

//Shows current status of question number and score
function displayScoreAndQuestionNumber() {
	$('.status').html(
		`<ul>
    <li>Question: <span class="questionNumber">${questionNumber}</span>/10</li>
    <li>Score: <span class="score">${score}</span></li>
  </ul>`
	);
}

//Click submit to check question results
function submitButton() {
	$("form[name='quiz']").submit(function(event) {
    event.preventDefault();
		showQuestionResults();
  });
}

//Checks if answer is correct or incorrecct
function showQuestionResults() {

	let correctAnswer = `${questions[currentQuestionIndex].correctAnswer}`;

	let selected = $('input:checked');

	let answer = selected.val();

	if (answer === correctAnswer) {
		updateScore();
		ifAnswerCorrect();
		displayScoreAndQuestionNumber();
	} else {
		ifAnswerWrong();
	}
}

//Changes question number
function nextQuestionIndex() {
	questionNumber++;
}

//Changes current question index
function updateCurrentQuestionIndex() {
	currentQuestionIndex++;
}

//Feedback if answer is correct
function ifAnswerCorrect() {
	$('.quizPage').html(
		`<h1>You are correct!</h1>
      <button class="continue">Continue</button>`
	);
	correctAnswerBackground();
}

//Changes background for correct answer
function correctAnswerBackground () {
  document.body.style.backgroundImage = "url('http://jackmalcolm.com/wp-content/uploads/2011/03/chicken.jpg')";
}

//Feedback for incorrect answer
function ifAnswerWrong() {
	$('.quizPage').html(
		`<h1>That is incorrect. The answer is ${questions[currentQuestionIndex]
			.correctAnswer}</h1>
     <button class="continue">Continue</button>`                  
	);
	wrongAnswerBackground();
}

//Changes background for incorrect answer
function wrongAnswerBackground () {
  document.body.style.backgroundImage = "url('http://cdn.playbuzz.com/cdn/ce797521-5b14-4239-8b7c-453bdd154de4/7fb6a4bb-8807-4e1d-a3c2-624903dc6ac6.png')";
}

//Updates the score 
function updateScore() {
	score++;
}

//Click continue to proceed to next question
function continueButton() {
	$('.quizPage').on('click', '.continue', function(event) {
	  startBackground();
	    
		updateCurrentQuestionIndex();

		nextQuestionIndex();

		startQuiz();
    
	});
}

//Displays quiz results when last question is reached
function displayResultsPage() {
	if (score >= 5) {
		$('.quizPage').html(
			`<h1>Your results: ${score}/10</h1>
		 <h2>Great job! You're on your way to becoming a Chicken Champion!</h2>
     <button class="restart">Restart Quiz</button>`
		);
		championChicken();
		
	} else {
		$('.quizPage').html(
			`<h1>Your results: ${score}/10</h1>
		 <h2>You may be a dumb cluck. Better luck next time!</h2>
     <button class="restart">Restart Quiz</button>`
		);
		dumbCluck();
	}
}

//Changes background for a good score
function championChicken() {
  document.body.style.backgroundImage = "url('https://www.applicoinc.com/wp-content/uploads/2014/12/chicken-and-egg.jpg')";
}

//Changes background for bad score
function dumbCluck() {
  document.body.style.backgroundImage = "url('https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/istock-113580444.jpg?itok=Ayxcnwt0')";
}

//Click restart to start quiz over
function restartButton() {
	$('.quizPage').on('click', '.restart', function(event) { 
	  $(".status").hide();
	  restartBackground();  
		restartQuestions();
		restartScore();
		startScreen();
	});
}

//Resets background to orignial image
function restartBackground() {
  document.body.style.backgroundImage = "url('https://www.carriermanagement.com/assets/smart-chicken-resized.jpg')";
}

//Resets score to 0 
function restartScore() {
	score = 0;
}

//Resets current question index to 0 and question number to 1
function restartQuestions() {
	currentQuestionIndex = 0;
	questionNumber = 1;
}

function quiz() {
	startScreen();
	startButton();
	submitButton();
	continueButton();
	restartButton();
}

$(quiz);