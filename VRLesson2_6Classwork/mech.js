class Mech{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
        this.dz=0.05;

        this.obj=mech.cloneNode(true);

        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);
    }

   move(){
    this.z +=this.dz;
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    }
}

