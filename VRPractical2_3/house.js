class House{
    constructor(x,y,z){
       this.house=document.createElement("a-entity");

        let wall=document.createElement("a-box");
        wall.setAttribute("height","4");
        wall.setAttribute("width","4");
        wall.setAttribute("depth","4");
        wall.setAttribute("position",{x:0, y:2, z:0})
        this.house.append(wall)

        let roof=document.createElement("a-cylinder");
        roof.setAttribute("segments-radial","3");
        roof.setAttribute("radius","2");
        roof.setAttribute("height","4");
        
        roof.setAttribute("position",{x:0, y:5, z:0}); 
        roof.setAttribute("rotation",{x:-90, y:0, z:0});
        this.house.append(roof)

        let window=document.createElement("a-box");
        window.setAttribute("depth","0.2");
        window.setAttribute("width","1");
        window.setAttribute("height","1");
        window.setAttribute("position",{x:-0.5, y:2, z:2});
        window.setAttribute("color","skyblue");
        window.setAttribute("opacity","0.5");
        this.house.append(window)

        let door=document.createElement("a-box");
        door.setAttribute("depth","0.2");
        door.setAttribute("width","1");
        door.setAttribute("height","1.5");
        door.setAttribute("position",{x:0.95, y:0.7, z:2});
        door.setAttribute("color","brown");
        this.house.append(door)

        
       
    

        this.house.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.house)
    }
}