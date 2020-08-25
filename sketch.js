const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var man_image;
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3, thunder4;
var umbrella;
var thunder, thunderCreatedFrame = 0;
var invisible;

function preload(){
    thunder1 = loadImage("Images/thunder1.png");
  thunder2 = loadImage("Images/thunder2.png");
  thunder3 = loadImage("Images/thunder3.png");
  thunder4 = loadImage("Images/thunder4.png");
  player = loadImage("Images/man.png")
  //  player_running = loadAnimation("Images/Monkey_01.png" ,"Images/Monkey_02.png", "Images/Monkey_03.png" , "Images/Monkey_04.png" ,  "Images/Monkey_05.png" , "Images/Monkey_06.png" , "Images/Monkey_07.png" ,    "Images/Monkey_08.png" , "Images/Monkey_09.png" , "Images/Monkey_10.png" ); player_running = loadAnimation("Monkey_01.png" ,"Monkey_02.png", "Monkey_03.png" , "Monkey_04.png" ,  "Monkey_05.png" , "Monkey_06.png" , "Monkey_07.png" ,    "Monkey_08.png" , "Monkey_09.png" , "Monkey_10.png" ); 
}

function setup(){
  var canvas = createCanvas(500,500);

  engine = Engine.create();
  world  = engine.world;

  umbrella = new Umbrella();
  invisible = createSprite (350,400,1000000,20);
    invisible.scale = 0.1;
    invisible.visible = false;

  if(frameCount%500===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(displayWidth-10,displayWidth+10),random(0,400),1));
     }
   }
  
}

function draw(){
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount%80===0){
    thunderCreatedFrame = frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);
thunder.scale = 0.5;
   switch(rand){
     case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     case 4 : thunder.addImage(thunder4);
     break;
     default : break;
   }

   console.log(thunderCreatedFrame);
  }
  
  if(thunderCreatedFrame + 20 === frameCount && thunder){
    thunder.destroy();
 }
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
  
  umbrella.display();
  drawSprites();
  textFont("Comic Sans MS");
  fill(255);
  stroke(255);
  strokeWeight(2);
  textSize(30);
  text("Oh! Its raining.",190,350)
}