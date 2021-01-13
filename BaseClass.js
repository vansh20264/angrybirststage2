class BaseClass
{
    constructor(x,y,width,height)
    {
        this.height=height;
        this.width=width;
        var option=
        {
            restitution:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
      

    }
    display()
    {
        var pos=this.body.position;
       rect(pos.x,pos.y,this.width,this.height);
    }
    
}