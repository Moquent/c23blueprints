const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400, 380, 800, 50);
    box1 = new Box(200,300,50,50);
    box2 = new Box(170, 100, 50, 50);
    box3 = new Box(230, 70, 50, 50);
}

function draw(){
    background(100);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
}