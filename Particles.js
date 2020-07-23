class Particles {
    constructor(x,y,r){
        var options = {
            restitution:0.4
        }
        this.r = r
this.body = Bodies.rectangle(x,y,this.r,options);
this.color=color(random(0,255), random(0,255), random(0,255));
World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER)
        fill("white")
        rect(pos.x,pos.y,this.x,this.y)
        pop()
    }
}