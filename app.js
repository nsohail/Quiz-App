//1. click get started--> fade
//2. function for submit button


$(document).ready(function(){
$('.getStarted').click(function(){
$('.overlay').fadeOut(1000);
});


});


$('.answerBtn').click(function(){
//$(this).removeClass('btn:focus,btn:active').addClass('answerSelected');
$(this).addClass('answerSelected');
});













