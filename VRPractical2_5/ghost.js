class Ghost {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.01; 

    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius", 0.5);
    this.obj.setAttribute("opacity", 0.8);
    this.obj.setAttribute("src","ghost.jpg");
    this.obj.setAttribute("transparent", true);

    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    scene.append(this.obj);
 
  }

  move(){
        this.y +=this.dy;
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

        if (this.y>1.3){
            this.y=Math.random()*-5-1;
        }
        

    }
}