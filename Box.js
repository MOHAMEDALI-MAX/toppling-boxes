class Box{

    //constructor() function is invoked whenever a new object is
    //made using the Box class blueprint
    constructor(x,y,width,height){
        //"this" to refer to the object created using this class
        var options={
            restitution : 0.8,
            friction: 0.3,
            density : 1.0
        }
        //this.x;
        //this.y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    //display box  object
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;

        //translate() -> to change the 0 of the axis to a given x and y position.
        //push() -> captures the new setting.
        //pop() -> reverts to the old setting.
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height)
        pop();

        
    }
};