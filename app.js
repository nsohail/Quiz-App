$(document).ready(function(){

    $('.overlay-lightbox').hide();

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
        animals: '50% 30px',
        errorMessage: "Error message for #1",
        correctMessage: "Correct message for #1"
    }, {
        question: "One main reason animals suffer in zoos is because",
        choices: ["Miss their families", "Location", "Horrible Food", "Less space"],
        questionValue: 1,
        correct: 3,
        animals: '50% -125px',
        errorMessage: "Error message for #2",
        correctMessage: "Correct message for #2"
    }, {
        question: "_________ of animals are caught from the wild solely for money and entertainment in aquariums and zoos",
        choices: ["50%", "70%", "20%", "10%"],
        questionValue: 2,
        correct: 1,
        animals: '50% -280px',
        errorMessage: "Error message for #3",
        correctMessage: "Correct message for #3"
    }, {
        question: "Orcas and dolphins in captivity usually live _________ years less than their average lifespan in the wild",
        choices: ["30 years", "5 years", "10 years", "20 years"],
        questionValue: 3,
        correct: 0,
        animals: '50% -438px',
        errorMessage: "Error message for #4",
        correctMessage: "Correct message for #4"
    }, {
        question: "Limited swimming space, stress, and warmer water conditions for orcas can cause",
        choices: ["Better performance tricks", "Hunger", "Happiness", "Their fins to collapse"],
        questionValue: 4,
        correct: 3,
        animals: '50% -595px',
        errorMessage: "Error message for #5",
        correctMessage: "Correct message for #5"
    }, {
    	question:"How can you help end the suffering of animals in captivity?",
    	choices:["Donate to organizations that help fight animal abuse", "Boycott zoos, aquariums, circuses, and Seaworld", "Educate others about this matter", "All of the above"],
    	questionValue: 5,
    	correct:3,
    	animals: '50% -750px',
        errorMessage: "Error message for #6",
        correctMessage: "Correct message for #6 " + "You scored " + $('.score-number').text()
    }];









    var i=0; //for questions array
    var e=0; //for the score


    $('.question').text(questions[i].question);


    var buttons = ['button.choice1','button.choice2','button.choice3','button.choice4'];
    for (var b in buttons)
        {
            var button = $(buttons[b]); //$('button.choice1')
            button.attr("value", b);
            button.text(questions[i].choices[b]);
        }
/*
    $('button.choice1').attr( "value", "0");
    $('button.choice2').attr( "value", "1");
    $('button.choice3').attr( "value", "2");
    $('button.choice4').attr( "value", "3");

    $('button.choice1').text(questions[i].choices[0]);
    $('button.choice2').text(questions[i].choices[1]);
    $('button.choice3').text(questions[i].choices[2]);
    $('button.choice4').text(questions[i].choices[3]);
*/

    $('.animals').css('background-position',questions[i].animals);

    
    



    //submit button
    $('button.submitBtn').click(function(){
	    var userAnswer= $('button.answerSelected').val();
	    console.log(userAnswer);
	    
        //UNDEFINED
	    if(userAnswer===undefined){
	    	//alert('Must pick an answer!');
            $('.overlay-lightbox').fadeIn(300);
             $('.overlay-lightbox .box').css('background-color','#dff0d7');
            
            $('.answer-check').text('Must pick an answer!');
            $('.answer').text('');

            $('.overlay-lightbox').on('click',$('#exit-icon'), function(){
                $('.overlay-lightbox').fadeOut(400);
            });

            return false;
	    }

        //CORRECT ANSWER
	    else if(userAnswer==questions[i].correct){
	    	//alert('CORRECT');
            
            e = e + 16.6;  //100/6
            $('.score-number').text(Math.ceil(e) + '%'); //round number upward

            $('.overlay-lightbox').fadeIn(300);
            $('.overlay-lightbox .box').css('background-color','#dff0d7');

            $('.answer-check').text('CORRECT!');
            $('.answer').text(questions[i].correctMessage);

            $('.overlay-lightbox').on('click',$('#exit-icon'), function(){
                $('.overlay-lightbox').fadeOut(400);
            });

            

	    }//end correct section

	    else{
            //INCORRECT
	       //alert('INCORRECT '+ userAnswer + ' is not ' + questions[i].correct);
           $('.overlay-lightbox').fadeIn(300);
           $('.overlay-lightbox .box').css('background-color','#f2dede');
           
           $('.answer-check').text('INCORRECT!');
           $('.answer').text(questions[i].errorMessage);

           $('.overlay-lightbox').on('click',$('#exit-icon'), function(){
                $('.overlay-lightbox').fadeOut(400);
           });
	    }
    

            //go to next question
            i=i+1;  //i=i + 1

            if(questions[i]==null){
                $(".submitBtn").prop("disabled",true );
                return false;
            }

            $('.question').text(questions[i].question);
        
            var nextButtons = ['button.choice1','button.choice2','button.choice3','button.choice4'];
            for(var b in nextButtons){
                var nextSet= $(nextButtons[b]);
                nextSet.text(questions[i].choices[b]);
            }

            $('button').removeClass('answerSelected');
            $('.animals').css('background-position',questions[i].animals);

            /*
            $('button.choice1').text(questions[i].choices[0]);
            $('button.choice2').text(questions[i].choices[1]);
            $('button.choice3').text(questions[i].choices[2]);
            $('button.choice4').text(questions[i].choices[3]);
            */
    

     });//submit function ends

});//end document ready
















