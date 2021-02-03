const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){
    background(0);
    Engine.update(engine);

}   

