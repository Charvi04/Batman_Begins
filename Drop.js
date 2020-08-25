class Drop {
    constructor(x,y,radius){
      var options = {
            
        restitution:0.1,
        friction:2,
        density:4,
        isStatic:false
    }
    this.body = Bodies.circle(x,y,radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);  
    fill("blue");
    ellipse(0,0, 5,5);
    pop();
  }
    
  
  
       update(){
         if(this.body.position.y>400){
            Matter.Body.setPosition(this.body,{x: random(0,400),
            y: random(-10,0)
            });
          }
       }
       
    }