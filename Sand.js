class Sand {
    constructor(x,y){
        var options = {
            'restitution' : 1.3,
             'friction' :5,
             'density' :1
        }
            this.body = Bodies.circle(x,y,1,options);
            this.radius = 1;
            World.add(world,this.body);  
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        strokeWeight(1);
        stroke("blue");
        fill("brown");
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    
    }
}