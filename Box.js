class Box extends BaseClass
{
  constructor(x,y,width,height)
  {
   super(x,y,width,height) ;
    this.image=loadImage("sprites/box.png");
  }
  display()
  {
    image(this.image,x,y,width,height);
  }
}