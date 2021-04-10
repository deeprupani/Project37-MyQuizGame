var canvas, backgroundImage;

var gameState = 0;
var contestantCount = 0;
var allContestants;
var answer;
var database;
var question, contestant, quiz;


function setup() {
  canvas = createCanvas(850, 400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.update(0);
  quiz.getState();
  quiz.start();
}


function draw() {
  background("pink");
  if (contestantCount === 2) {
    quiz.update(1);
  }
//  console.log(gameState);
  if (gameState === 1) {
    // clear();
    quiz.play();
  }
}
