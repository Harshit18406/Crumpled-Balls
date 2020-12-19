class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.5,
			friction:0.5,
			density:2.0

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			ellipseMode(CENTER)
			strokeWeight(3);
			fill("red")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}