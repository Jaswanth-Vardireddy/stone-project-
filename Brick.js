class Brick
{
 constructor(x,y,width,height)
{

var options={
isStatic:false,
restitution:0.4,
density:1.0,
friction:1.0
}
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.image=loadImage("Sprites/B4.png")

}
display()
{
var pos=this.body.position
var angle=this.body.angle
if(this.body.speed<2)
{
    push()
    rotate(angle)
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    pop()
}
else
{
World.remove(world,this.body)
}
}

}