class Drops {
    constructor(x,y,radius) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
      }

      this.body = Bodies.rectangle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
     
      rectMode(CENTER);
      fill(255);
      rect(this.body.position.x,this.body.position.y, this.radius);

      var maxDrops = 100;
      for(var i=0; i<maxDrops; i++){
          Drops.push(new createDrop(random(0,400), random(0,400)))
      }  
     
    }
  };