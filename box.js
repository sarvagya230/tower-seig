class Box 
{
    constructor(x,y,width,height)
    {
        this.x=x;
        this.y=y;
        this.width=width 
        this.height=height;
        this.visibility=255
        this.body=Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,{
            plugin: {
              attractors: [
                function(bodyA, bodyB) {
                  return {
                    x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                    y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                  };
                }
              ]
            }}
            )
        Matter.World.add(world,this.body)
        this.color=rgb(random(0,255),random(0,255),random(0,255))

    }
    display()
    {

        var pos=this.body.position;
        if(this.body.speed<10)
        {
        push()
        translate(pos.x,pos.y)
        fill(this.color)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
      
        pop()
        }
        else{
            
             Matter.World.remove(world,this.body);
              push();
              this.visibility = this.visibility - 5;
              tint(100,this.visibility);
              pop();
            }
    }
    score(){
        if(this.visibility<0 && this.visibility>-105){
          score++;
        }
      } 
}



