class Umbrella {
    constructor(x, y, r) {


        var options = {
            isStatic: true,
        }
        this.image = loadImage("walking_1.png", "walking_2.png", "walking_3.png)", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png")

        this.umbrella = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display() {
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y + 70, 300, 300);
    }
}