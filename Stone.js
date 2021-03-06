class Stone
{
constructor(x,y,width,height,color,image)
{

var options={
friction:0.8,
restitution:1.0,
density:1.0
}
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.color=color;
this.image=image


}
display()
{
var pos=this.body.position
var angle=this.body.angle
push()
rotate(angle)
translate(pos.x,pos.y)
fill(this.color)
imageMode(CENTER)
image(this.image,0,0,50,50)
pop()
}



}