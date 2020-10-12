class Umbrella {      
     constructor(){
          var options = {
               isStatic: true,
               restitution: 0.5
          };
          var radius = 200;
          this.body = Matter.Bodies.circle(280, 350, radius, options);
          this.width = radius;
          this.height = radius;
          World.add(world, this.body);
     }
     display(){
          var pos = this.body.position;
          scale(0.3);
          animation(man_image, 250, 470);
     }
}