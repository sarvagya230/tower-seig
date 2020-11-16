var world,engine,box1,ground1
var box2,box3,box4,box5,box6,box7,box8,box9;

;var score=0
function setup()
{

  
  createCanvas(600,600)
  engine=Matter.Engine.create()
  world=engine.world;
 
  box1=new Box(200+100,80+40,40,40)
  box2=new Box(240+100,80+70,40,40)
  box3=new Box(280+100,80+70,40,40)
  box4=new Box(320+100,80+70,40,40)
  box5=new Box(360+100,80+70,40,40)
  box6=new Box(220+120,40+70,40,40)
  box7=new Box(260+120,40+70,40,40)
  box8=new Box(300+120,40+70,40,40)
  box9=new Box(280+100,70,40,40)
  ground1=new Ground(280+100,400,260,10)
  var options=
  {
    bodyA:box1.body,
    bodyB:box2.body,
    lenght:0,
    stiffness:1,

  }
  var options2=
  {
    bodyA:box3.body,
    bodyB:box4.body,
    lenght:0,
    stiffness:1,

  }
 var Constraint= Matter.Constraint.create(options)
 var a=Matter.Constraint.create(options2)
 Matter.World.add(world,Constraint)
 Matter.World.add(world,a)
Hexa=new hexa(20,200,120)
}
function  preload() 
{
  hexa_image=loadImage('hexagon.png')
}
function draw()
{
  Matter.Engine.update(engine)
  Matter.Body.setStatic(ground1.body,true)
  
  
  
  background(0)
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()
  ground1.display()
 Hexa.display()
 keyknown()
 strokeWeight(1)
 fill(255)
 stroke(255)
 
 text("score: "+score,200,20)
 
 

 
}
function mouseDragged(){
  Matter.Body.setPosition(Hexa.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  Hexa.fly();
}
function keyknown()
{
  if (keyCode === 32) {
  Matter.Body.setPosition(Hexa.body,{x:100, y:100});
 
  
}
}


