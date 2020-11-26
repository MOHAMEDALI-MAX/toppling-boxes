class ground{

    //constructor() function is invoked whenever a new object is
    //made using the Box class blueprint
    constructor(x,y,width,height){
        //"this" to refer to the object created using this class
        var options={
            isStatic: true
        }
        //this.x=x;
        //this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    //display box  object
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height)
    }
}