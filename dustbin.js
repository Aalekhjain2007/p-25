
  class Box {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true,
          'restitution':0.8,
          'friction':2.0,
          'density':8.0
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      
      push();
      translate(this.body.position.x, this.body.position.y);
      
     // imageMode(CENTER);
      //image( 0, 0, this.width, this.height);
      rect(0,0,this.width,this.height)
      fill(255)
      imageMode(CENTER);
      image(this.image, 0, this.dustbinHeight/2, this.dustbinWidth, this.dustbinHseight);
      pop();
    }
}
  
 