class Bob {
    constructor(x, y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.body = Bodies.circle(x, y, width, height);
        this.width = 15;
        this.height = 15;

        this.image = loadImage("Silver Ball.jpg");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill(255);
        image(this.image, o, o, this.width, this.height);
        pop();
    }
} 