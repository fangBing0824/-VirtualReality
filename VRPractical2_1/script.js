let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
    
  
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
    createCloud(x,5,z);
   
   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
  
    createHouse(x,0,z);
  }
    
   
 
  
  
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x,y,z){
  let cloud=document.createElement("a-entity");

  let sphere1=document.createElement("a-sphere");
  sphere1.setAttribute("color","skyblue");
  sphere1.setAttribute("radius","0.65");
  sphere1.setAttribute("position",{x:0, y:3, z:0});
  cloud.append(sphere1)

  let sphere2=document.createElement("a-sphere");
  sphere2.setAttribute("color","skyblue");
  sphere2.setAttribute("radius","0.5");
  sphere2.setAttribute("position",{x:-0.75, y:3, z:0});
  cloud.append(sphere2)

  let sphere3=document.createElement("a-sphere");
  sphere3.setAttribute("color","skyblue");
  sphere3.setAttribute("radius","0.5");
  sphere3.setAttribute("position",{x:0.75, y:3, z:0});
  cloud.append(sphere3)

  cloud.setAttribute("position",{x:x,y:y,z:z});
  scene.append(cloud)
}
/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x,y,z){
  let house=document.createElement("a-entity");

  let wall=document.createElement("a-box");
  wall.setAttribute("height","4");
  wall.setAttribute("width","4");
  wall.setAttribute("depth","4");
  wall.setAttribute("position",{x:0, y:2, z:0})

  let roof=document.createElement("a-cylinder");
  roof.setAttribute("segments-radial","3");
  roof.setAttribute("radius","2");
  roof.setAttribute("height","4");
  
  roof.setAttribute("position",{x:0, y:5, z:0}); 
  roof.setAttribute("rotation",{x:-90, y:0, z:0});

  let window=document.createElement("a-box");
  window.setAttribute("depth","0.2");
  window.setAttribute("width","1");
  window.setAttribute("height","1");
  window.setAttribute("position",{x:-0.5, y:2, z:2});
  window.setAttribute("color","skyblue");
  window.setAttribute("opacity","0.5");

  let door=document.createElement("a-box");
  door.setAttribute("depth","0.2");
  door.setAttribute("width","1");
  door.setAttribute("height","1.5");
  door.setAttribute("position",{x:0.95, y:0.7, z:2});
  door.setAttribute("color","brown");

  house.append(wall)
  house.append(roof)
  house.append(window)
  house.append(door)

  house.setAttribute("position",{x:x,y:y,z:z});
  scene.append(house)
}
 function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



