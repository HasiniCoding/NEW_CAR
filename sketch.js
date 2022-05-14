var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState = 0

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car_1Image = loadImage("./assets/car1.png")
  car_2Image = loadImage("./assets/car2.png")
  titleImage = loadImage("./assets/title.png")
  trackImage = loadImage("./assets/track.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount === 2){
    game.update(1)
  }
  if(playerCount === 1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
