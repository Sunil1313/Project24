class Rubber{
    constructor(x,y){
        var options = {
            'density' : 0.8,
            'friction' : 0.5,
            'restitution' :1
        }
        this.body =  Bodies.circle(x,y,4,options);
        this.radius = 4;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        strokeWeight(3);
        stroke("blue");
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,50,50);
        pop();

    }
}