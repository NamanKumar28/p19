class Paddle {
  
  constructor(){
    this.width = 10;
    this.height = 100;
    this.xPosition = 0;
    this.yPosition= 0;
  }
  
  
  display(){
    rect(this.xPosition, this.yPosition, this.width, this.height);
  };
}
    
function setup(){
  createCanvas(400,400);
}

function draw() {
  //set background to white
  background("white");
  
  //player Paddle
  var playerPaddle = new Paddle();
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  playerPaddle.display();
  
  // computer paddle
  var computerPaddle = new Paddle();
  computerPaddle.xPosition = 10;
  computerPaddle.yPosition = 160;
  
  computerPaddle.display();
  
  //added paddle
  var addedPaddle = new Paddle ();
  addedPaddle.xPosition = 90;
  addedPaddle.yPosition = 120;
  
  addedPaddle.display();
  //draw the ball
  rect(200,200,10,10);
  //added ball
   var addedBall = new Ball();
  addedBall.xPosition = 10;
  addedBall.yPosition = 10;
   
  addedBall.display();
}
   