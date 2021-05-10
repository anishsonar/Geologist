class Iron{
	constructor(x,y)
	{ var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x, y, 50, 50, options);
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
            rect(0, 0, this.x, this.y);
			pop()
	}

}