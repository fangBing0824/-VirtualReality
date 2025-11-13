class Sign {
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let c = document.createElement("a-box");
    c.setAttribute("depth","0.1");
    c.setAttribute("width","1");
    c.setAttribute("height","0.8");
    c.setAttribute("color","red");
    c.setAttribute("src","enter.png");
    this.obj.append(c);

    let foot1 = document.createElement("a-box");
    foot1.setAttribute("depth","0.1");
    foot1.setAttribute("width","0.1");
    foot1.setAttribute("height","1");
    foot1.setAttribute("position",{x:-0.25,y:-0.8,z:0});
    foot1.setAttribute("color","black");
    this.obj.append(foot1);

    let foot2 = document.createElement("a-box");
    foot2.setAttribute("depth","0.1");
    foot2.setAttribute("width","0.1");
    foot2.setAttribute("height","1");
    foot2.setAttribute("position",{x:0.25,y:-0.8,z:0});
    foot2.setAttribute("color","black");
    this.obj.append(foot2);

    


    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);



      }

}