
$(document).ready(function() {
  // Section 1: Image Movement
  let $tiger = $('.img-tiger');
  let position = { top: 0, left: 0 };

  $('#move-up').click(function() {
    position.top -= 30;
    $tiger.css('top', position.top + 'px');
  });

  $('#move-down').click(function() {
    position.top += 30;
    $tiger.css('top', position.top + 'px');
  });

  $('#move-left').click(function() {
    position.left -= 30;
    $tiger.css('left', position.left + 'px');
  });

  $('#move-right').click(function() {
    position.left += 30;
    $tiger.css('left', position.left + 'px');
  });

  // Section 2: Interactive Trivia Question
  $('.answer').click(function() {
    let selectedAnswer = $(this).text().toLowerCase(); 
    let correctAnswer = "ottawa";

    if (selectedAnswer === correctAnswer) {
      $('#result').text('Correct!');
      $('#result').css('color', 'green');
    } else {
      $('#result').text('Incorrect. Try again.');
      $('#result').css('color', 'red');
    }
  });

  // Section 3: Scroll-Activated Image Movement
  let $lion = $('.img-lion');

  $(window).scroll(function() {
    let scrollPosition = $(this).scrollTop();
    $lion.css('transform', 'translate(-50%, -50%) translateY(' + scrollPosition * 0.3 + 'px)');
  });

    //Section 4 Choose your own adventure
    $('#adventure1').click(function(){
        $('#adventure-result').text('You went left and found a treasure!');
    });
    $('#adventure2').click(function(){
        $('#adventure-result').text('You went right and encountered a friendly dragon!');
    });
});
