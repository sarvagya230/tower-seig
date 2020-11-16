
class hexa
{
    constructor(x,y,r){
    this.hexa_options={
            restitution:20

        }
       
        this.x=x;
        this.y=y;
        this.r=r
        this.body = Matter.Bodies.circle(this.x,this.y,this.r,this.hexa_options)
        
        this.width=width;
        this.height=height;
        this.image = loadImage("hexagon.png");
        this.options=
        {
            bodyA:this.body,
            pointB:{x:30, y:20},
           
            lenght:30,
            stiffness:0.1
           
            

        }
       this.sling= Matter.Constraint.create(this.options) 

        Matter.World.add(world,this.body);
        Matter.World.add(world,this.sling);

    }
    sling()
    {
       var body=this.sling
    }

    display(){
        
        
        var pos= this.body.position
        push()
        translate(pos.x,pos.y)
        strokeWeight(6)
        stroke(0,0,255)
        line(this.body.position.x,this.body.position.y,30,20)
       imageMode(CENTER)
       image(this.image,pos.x,pos.y,120,120)
       pop()
        
       
        
    }
    fly()
    {
        this.sling.bodyA = null;
    }
}
