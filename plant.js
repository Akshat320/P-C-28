class Tree{
    constructor(x,y) {
      var options = {
          isStatic: true
      }

       this.image = loadImage("tree3.png");
      this.body = Bodies.rectangle(x,y,450,600,options);
      this.width = 450;
      this.height = 600;

      
      World.add(world, this.body);
    }
    display(){
    
      push();
      translate(this.body.position.x, this.body.position.y);
      fill("grey");

      imageMode(CENTER);    
     image(this.image, 0, 0, 750/2, 850/2);
     pop();
    }
  }