//1. click get started--> fade
//2. function for submit button


$(document).ready(function(){

$('.getStarted').click(function(){
$('.overlay').fadeOut(1000);
});

var answerChoice= $('.answerBtn').val(); //this is the submit value
});


function startQuiz(){
	var rightAnswer='18 hours a day';

	$('.submitBtn').click(function(){
	if(answerChoice===rightAnswer){
		alert('yay!');
	}
	});
}

