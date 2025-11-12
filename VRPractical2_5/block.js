class Block{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("depth", 1);
    this.obj.setAttribute("height", 1);
    this.obj.setAttribute("width", 1);
    this.obj.setAttribute("color","#4B5563");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}