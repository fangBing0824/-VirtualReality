class Snowflake{
  constructor(x,y,z){
    // Challenge 5: Create animation variables y and dy for the Snowflake to fall.  Set them to appropriate values.
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("color","blue");
    this.obj.setAttribute("radius", 0.2);
    scene.append( this.obj )

    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.05;
  }

  //Challenge 6: Create a function fall() which decreases y by dy and updates the Snowflake object to that y position
  fall(){
    this.y -=this.dy;
    this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
  }
}