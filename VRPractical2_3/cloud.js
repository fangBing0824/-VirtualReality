class Cloud{
    constructor(x,y,z){
        this.cloud=document.createElement("a-entity");

        let sphere1=document.createElement("a-sphere");
        sphere1.setAttribute("color","skyblue");
        sphere1.setAttribute("radius","0.65");
        sphere1.setAttribute("position",{x:0, y:3, z:0});
        this.cloud.append(sphere1)

        let sphere2=document.createElement("a-sphere");
        sphere2.setAttribute("color","skyblue");
        sphere2.setAttribute("radius","0.5");
        sphere2.setAttribute("position",{x:-0.75, y:3, z:0});
        this.cloud.append(sphere2)

        let sphere3=document.createElement("a-sphere");
        sphere3.setAttribute("color","skyblue");
        sphere3.setAttribute("radius","0.5");
        sphere3.setAttribute("position",{x:0.75, y:3, z:0});
        this.cloud.append(sphere3)

        this.cloud.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.cloud)
    }
}