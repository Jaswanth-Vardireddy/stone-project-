class Rope
{

constructor(bodyA,pointB)
{
var options={
bodyA:bodyA,
pointB:pointB,
length:10,
stiffness:0.04
}
this.rope=Constraint.create(options)
World.add(world,this.rope)
this.bodyA=bodyA;
this.pointB=pointB;

}

fling()
{
this.rope.bodyA=null;    
}

attach(body)
{
this.rope.bodyA=body
}
display()
{
if(this.rope.bodyA)
{
    var pointA=this.rope.bodyA.position
    var pointB=this.pointB
    push()
    strokeWeight(4)
    stroke("white")
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop()
}
}

}