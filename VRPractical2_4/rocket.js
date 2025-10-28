class Rocket{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.dy=0.05;
        this.z=z;

        this.rocket=document.createElement("a-entity");

        let body=document.createElement("a-cylinder");
        body.setAttribute("radius","1.2");
        body.setAttribute("height","10");
        body.setAttribute("position",{x:0,y:5,z:0});
        body.setAttribute("color","gray");
        this.rocket.append(body);

        let cone=document.createElement("a-cone");
        cone.setAttribute("radius-bottom","1.2");
        cone.setAttribute("height","3");
        cone.setAttribute("position",{x:0,y:11.5,z:0});
        cone.setAttribute("color","red");
        this.rocket.append(cone);

        let fin1=document.createElement("a-box");
        fin1.setAttribute("width","0.1");
        fin1.setAttribute("depth","0.5");
        fin1.setAttribute("height","2");
        fin1.setAttribute("position",{x:0,y:0.5,z:-1.2});
        fin1.setAttribute("rotation",{x:15,y:0,z:0});
        fin1.setAttribute("color","orange");
        this.rocket.append(fin1);

        let fin2=document.createElement("a-box");
        fin2.setAttribute("width","0.1");
        fin2.setAttribute("depth","0.5");
        fin2.setAttribute("height","2");
        fin2.setAttribute("position",{x:0,y:0.5,z:1.2});
        fin2.setAttribute("rotation",{x:0,y:0,z:15});
        fin2.setAttribute("color","orange");
        this.rocket.append(fin2);

        let fin3=document.createElement("a-box");
        fin3.setAttribute("width","0.1");
        fin3.setAttribute("depth","0.5");
        fin3.setAttribute("height","2");
        fin3.setAttribute("position",{x:-1.2,y:0.5,z:0});
        fin3.setAttribute("rotation",{x:-15,y:0,z:0});
        fin3.setAttribute("color","orange");
        this.rocket.append(fin3);

        let fin4=document.createElement("a-box");
        fin4.setAttribute("width","0.1");
        fin4.setAttribute("depth","0.5");
        fin4.setAttribute("height","2");
        fin4.setAttribute("position",{x:1.2,y:0.5,z:0});
        fin4.setAttribute("rotation",{x:0,y:0,z:-15});
        fin4.setAttribute("color","orange");
        this.rocket.append(fin4);

        let window=document.createElement("a-sphere");
        window.setAttribute("radius","0.7");
        window.setAttribute("position",{x:0,y:9,z:0.8});
        window.setAttribute("opacity","0.5");
        window.setAttribute("color","skyblue");
        this.rocket.append(window);

        this.rocket.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.rocket);
    }

    launch(){
        this.y -=this.dy;
        this.rocket.setAttribute("position",{x:this.x,y:this.y,z:this.z})
        

    }
}