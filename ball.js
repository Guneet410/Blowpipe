class Ball{
    constructor(x,y){

        var ball_options = {
            restitution: 0.95,
            frictionAir:0.01
          }
   
          
        this.body = Bodies.circle(x,y,35,ball_options)
        World.add(world,this.body)
        this.image = loadImage("ball.png");
    }
 
    display(){
     //   imgMode(CENTER)
       image(this.image,this.body.position.x,this.body.position.y,40,40)
    }







}