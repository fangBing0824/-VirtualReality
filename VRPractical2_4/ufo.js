class UFO{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.dy=0.04;
        this.z=z;

        this.ufo=document.createElement("a-entity");

        let top=document.createElement("a-sphere");
        top.setAttribute("radius","3");
        top.setAttribute("phi-start","0");
        top.setAttribute("phi-length","90");
        top.setAttribute("rotation",{x:0,y:0,z:-90});
        top.setAttribute("position",{x:0,y:2,z:0});
        top.setAttribute("opacity","0.5");
        this.ufo.append(top);


        let body=document.createElement("a-sphere");
        body.setAttribute("radius","5");
        body.setAttribute("scale",{x:1,y:0.3,z:1});
        body.setAttribute("position",{x:0,y:1.5,z:0});
        body.setAttribute("color","blue");
        this.ufo.append(body);

        let bottom=document.createElement("a-sphere");
        bottom.setAttribute("radius","3");
        bottom.setAttribute("phi-start","0");
        bottom.setAttribute("phi-length","90");
        bottom.setAttribute("rotation",{x:0,y:0,z:90});
        bottom.setAttribute("position",{x:0,y:0.5,z:0});
        bottom.setAttribute("color","lightgray");
        this.ufo.append(bottom);

        let light=document.createElement("a-cone");
        light.setAttribute("radius-bottom","2.5");
        light.setAttribute("radius-top", "0");
        light.setAttribute("height", "5");
        light.setAttribute("color","yellow");
        light.setAttribute("opacity","0.4");
        light.setAttribute("position",{x:0,y:-2.5,z:0.35});
        light.setAttribute("rotation",{x:180,y:0,z:0});
        this.ufo.append(light);

      

        this.ufo.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.ufo);


    }
     invade(){
        this.y -=this.dy;
        this.ufo.setAttribute("position",{x:this.x,y:this.y,z:this.z});
        if (this.y<=5){
            this.y = 5
        }
        

    }
}