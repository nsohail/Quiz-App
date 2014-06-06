$(document).ready(function(){
	$('.getStarted').click(function(){
		$('.overlay').fadeOut(1000);
	});

	$('.answerBtn').click(function(){
		$('.answerSelected').toggleClass('answerSelected');
		$(this).addClass('answerSelected');
	});

	

//Question info here
	var questions = [{
        question: "Safari parks keep animals locked into small enclosures for up to",
        choices: ["18 hours a day", "10 hours a day", "5 hours a day", "Never"],
        questionValue: 0,
        correct: 0, //HOW DOES THIS KNOW WHICH 0?
        animals: '50% 40px'
    }, {
        question: "One main reason animals suffer in zoos is because",
        choices: ["Miss their families", "Location", "Horrible Food", "Less space"],
        questionValue: 1,
        correct: 3,
        animals: '50% -115px'
    }, {
        question: "_________ of animals are caught from the wild solely for money and entertainment in aquariums and zoos",
        choices: ["50%", "70%", "20%", "10%"],
        questionValue: 2,
        correct: 1,
        animals: '50% -266px'
    }, {
        question: "Orcas and dolphins in captivity usually live _________ years less than their average lifespan in the wild",
        choices: ["30 years", "5 years", "10 years", "20 years"],
        questionValue: 3,
        correct: 0,
        animals: '50% -419px'
    }, {
        question: "Limited swimming space, stress, and warmer water conditions for orcas can cause",
        choices: ["Better performance tricks", "Hunger", "Happiness", "Their find to collapse"],
        questionValue: 4,
        correct: 3,
        animals: '50% -577px'
    }, {
    	   question:"How can you help end the suffering of animals in captivity?",
    	   choices:["Donate to organizations that help fight animal abuse", "Boycott zoos, aquariums, circuses, and Seaworld", "Educate others about this matter", "All of the above"],
    	   questionValue: 5,
    	   correct:3,
    	   animals: '50% -731px'
    }];


    var i=0;

    $('.question').text(questions[i].question);
    $('button.choice1').text(questions[i].choices[0]);
    $('button.choice2').text(questions[i].choices[1]);
    $('button.choice3').text(questions[i].choices[2]);
    $('button.choice4').text(questions[i].choices[3]);
    $('.animals').css('background-position',questions[i].animals);

    

    //submit button
    $('button.submitBtn').click(function(){
	    var userAnswer= $('button').find(".answerBtn.answerSelected").text();
	    console.log(userAnswer);
	    
	    if(userAnswer===undefined){
	    	alert('Must pick an answer!');
	    }

	    else if(userAnswer===questions[i].correct){
	    	alert('CORRECT');

        //to go to next question
        i=i + 1;
        $('.question').text(questions[i].question);
        $('button.choice1').text(questions[i].choices[0]);
        $('button.choice2').text(questions[i].choices[1]);
        $('button.choice3').text(questions[i].choices[2]);
        $('button.choice4').text(questions[i].choices[3]);
        $('.animals').css('background-position',questions[i].animals);
	    }

	    else{
	    	alert('INCORRECT');
	    }
    
    
	   
    });//submit function ends

});//end document ready
















