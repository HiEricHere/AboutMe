'use strict';

// guessing game. asks questions and asks for yes/no input from user.
// determine with conditional if the input is relevant by converting
// the string to uppercase and then testing if the first letter of the string
// is Y or N and providing feedback. If not Y or N then show error message.

var question1 = 'Did I take last year off traveling to remote regions of the world to experience new foods, connections and joys that the trappings of modern life can\'t provide, discover new perspectives and reflections about what\'s truly important in life and ultimately find inner peace in learning my place in this world?';
var question2 = 'Am I from around here?';
var question3 = 'Am I over 20?';
var question4 = 'Am I under 30?';
var question5 = 'Do I prefer a perfect medium rare steak or a big breakfast on a beautiful sunday morning?';
var inputYN;
var inputUpper;
var playGame;
playGame = confirm('Press OK to guess some silly things about me!');
console.log('User decided to play: ', playGame);
if (playGame) {
  inputYN = prompt(question1);
  console.log('question 1 inputYN returns ', inputYN);
  inputUpper = inputYN.toUpperCase();
  console.log('question 1 inputUpper returns ', inputUpper.charAt(0));
  if (inputUpper.charAt(0) === 'Y') {
    alert('Actually I spent last year behind a desk in a corporate office doing corporate things for corporate people.');
  } else if (inputUpper.charAt(0) === 'N') {
    alert('Thanks for the vote of confidence! :(');
  } else {
    alert('These questions are all Y/N, by the way.');
  }
  inputYN = prompt(question2);
  console.log('question 2 inputYN returns ', inputYN);
  inputUpper = inputYN.toUpperCase();
  console.log('question 2 inputUpper returns ', inputUpper.charAt(0));
  if (inputUpper.charAt(0) === 'Y') {
    alert('Sure wish, I moved here from Texas just a couple weeks ago!');
  } else if (inputUpper.charAt(0) === 'N') {
    alert('That\'s right, I come from a strange land many may know as \'Texas\'');
  } else {
    alert('These questions are all Y/N, by the way.');
  }
  inputYN = prompt(question3);
  console.log('question 3 inputYN returns ', inputYN);
  inputUpper = inputYN.toUpperCase();
  console.log('question 3 inputUpper returns ', inputUpper.charAt(0));
  if (inputUpper.charAt(0) === 'Y') {
    alert('Yup');
  } else if (inputUpper.charAt(0) === 'N') {
    alert('Wayyyy over 20');
  } else {
    alert('These questions are all Y/N, by the way.');
  }
  inputYN = prompt(question4);
  console.log('question 4 inputYN returns ', inputYN);
  inputUpper = inputYN.toUpperCase();
  console.log('question 4 inputUpper returns ', inputUpper.charAt(0));
  if (inputUpper.charAt(0) === 'Y') {
    alert('Unfortunately those days have passed... :\'(');
  } else if (inputUpper.charAt(0) === 'N') {
    alert('Don\'t have to remind me :(');
  } else {
    alert('These questions are all Y/N, by the way.');
  }
  inputYN = prompt(question5);
  console.log('question 5 inputYN returns ', inputYN);
  inputUpper = inputYN.toUpperCase();
  console.log('question 5 inputUpper returns ', inputUpper.charAt(0));
  if (inputUpper.charAt(0) === 'Y') {
    alert('right on.');
  } else if (inputUpper.charAt(0) === 'N') {
    alert('cold tasteless noodles with a side of cardboard is my goto.');
  } else {
    alert('These questions are all Y/N, by the way.');
  }
}