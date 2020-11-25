class Boy{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
  
         this.image = loadImage("boy2.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
  
        
        World.add(world, this.body);
      }
      display(){
       
        rectMode(CENTER);
        fill("grey");
  
       image(this.image,this.body.position.x,this.body.position.y);
      }
}