var database;
var form,
  game,
  firend,
  playerCount = 0;
 
var gameState = 0;


function preload() {
  bgimg = loadImage("background.png");
}

function setup() {
 
  canvas = createCanvas(850,470);
  database = firebase.database();

  form = new Form();
 
  
}

function draw() {

  /*Add the background image and display the form
  Make Sure to add confid data in index.html */

  //Write the code after this line

  if(gameState === 0){
      background(bgimg);
      form.display();
  }



  //Write the code before this line 
        
 
}

