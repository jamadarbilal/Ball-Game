const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var divisionsHeight = 10;
function setup() {
   createCanvas(650,650);
    engine = Engine.create();
    world = engine.world;

    g = new Ground(650,650,3000,50)
   

    for(var k = 0; k <=width; k= k+80){
      divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
    }

    for(var w = 30; w <=width; w= w+60){
      divisions.push(new Divisions(w,height-divisionHeight/0.5,10,divisionsHeight));
    }

    for(var h = 30; h <=width; h= h+60){
      divisions.push(new Divisions(h,height-divisionHeight/0.6,10,divisionsHeight));
    }

    for(var i = 30; i <=width; i= i+60){
      divisions.push(new Divisions(i,height-divisionHeight/0.7,10,divisionsHeight));
    }

    for(var l = 30; l <=width; l= l+60){
      divisions.push(new Divisions(l,height-divisionHeight/0.9,10,divisionsHeight));
    }

    

  
//createSprite(400, 200, 50, 50);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2-10), 10,10))
  }

  for(var k = 0; k < divisions.length;k++){
    divisions[k].display()
  }

  for(var l = 90; l < divisions.length;l++){
    divisions[l].display()
  }

  for(var i = 90; i < divisions.length;i++){
    divisions[i].display()
  }

  for(var w = 90; w < divisions.length;w++){
    divisions[w].display()
  } 
   

  for(var h = 90; h < divisions.length;h++){
    divisions[h].display()
  } 
  
  g.display(); 

}