class Drop {
  constructor(x, y, width, height) {
      var options={
       restitution: 0.1,
       friction: 0.001
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    fill("darkblue");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  }
  update(){
    if(this.body.position.y>1000){
      Matter.Body.setPosition(this.body,{x: random(0,500), y: random(-10,0)});
    }
  }
}
