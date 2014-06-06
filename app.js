//1. click get started--> fade
//2. function for submit button


$(document).ready(function(){
	$('.getStarted').click(function(){
		$('.overlay').fadeOut(1000);
	});

	$('.answerBtn').click(function(){
		$(this).toggleClass('answerSelected');
	});

	

//Question info here
	var questions = [{
        question: "Safari parks keep animals locked into small enclosures for up to",
        choices: ["18 hours a day", "10 hours a day", "5 hours a day", "Never"],
        questionValue: 0,
        correct: 0,
        alertText: "18 hours a day"
    }, {
        question: "Blah 1",
        choices: ["18 hours a day", "10 hours a day", "5 hours a day", "Never"],
        questionValue: 1,
        correct: 0,
        alertText: "blah yes"
    }, {
        question: "Blah 2",
        choices: ["18 hours a day", "10 hours a day", "5 hours a day", "Never"],
        questionValue: 2,
        correct: 0,
        alertText: "blah yes"
    }, {
        question: "Blah 3",
        choices: ["18 hours a day", "10 hours a day", "5 hours a day", "Never"],
        questionValue: 3,
        correct: 0,
        alertText: "blah yes"
    }, {
        question: "Blah 4",
        choices: ["18 hours a day", "10 hours a day", "5 hours a day", "Never"],
        questionValue: 4,
        correct: 0,
        alertText: "blah yes"
    }];


    var i=0;

    $('.question').text(questions[i].question);
    $('button.choice1').text(questions[i].choices[0]);
    $('button.choice2').text(questions[i].choices[1]);
    $('button.choice3').text(questions[i].choices[2]);
    $('button.choice4').text(questions[i].choices[3]);

    

});//end document ready
















