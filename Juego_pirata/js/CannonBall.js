class CannonBall {
constructor(x,y){
 var options= {
    isStatic: true
}
this.r=30
this.body=Bodies.circle (x,y,this.r,options);
//this.image = loadImage("./assests/cannonball.png");//
World.add(world,this.body);
}
shoot(){
    var newAngle = cannon.angle - 28; 
    newAngle = newAngle *(3.14/180);
    var velocity = p5.Vector.fromAngle(newAngle); 
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body,false)
    setVelocity(this.body,{x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)})

}
display(){
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    ellipse(this.ellipse,pos.x, pos.y,this.r,this.r);
    pop();
}
}