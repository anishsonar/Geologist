class Stone{
	constructor(x,y)
	{ var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x, y, 50, 50, options);
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
            rect(0, 0, this.x, this.y);
			pop()
	}

}