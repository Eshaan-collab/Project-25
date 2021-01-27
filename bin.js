class Bin{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
       this.image=loadImage("img/dustbingreen.png")
        
        World.add(world,this.body);
    }
    display(){
        fill("white");
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,160,250);
    }
}
