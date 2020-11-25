class Stone{

    constructor(x,y,r)
    {
    var options = 
    {   isStatic: false,
        restitution: 0.7,
        friction: 0.5,
        density: 1.2
    
    }

    this.image = loadImage("stone1.png");
    this.r = r;
    this.x = x;
    this.y = y;
    
    this.body = Bodies.circle(x, y, r, options);

    World.add(world, this.body);
    }

    
    display()
    {
       
        fill("blue");
push();
translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0);
    pop();
    }
}