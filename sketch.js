const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase;
var playerBase;
var computerPlayer;
var player;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerBase = new ComputerBase(1500,650,400,400);
  playerBase = new PlayerBase(500,650,400,400);
  computerPlayer = new ComputerPlayer(1500,370,200,300);
  player = new Player(500,370,200,300);
  
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


   //Display Playerbase and computer base 
  computerBase.display();
  playerBase.display();
  computerPlayer.display();
  player.display();

   //display Player and computerplayer


}
