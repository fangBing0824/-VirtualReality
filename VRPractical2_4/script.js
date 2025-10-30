let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets=[];
let ufos=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  road(0, 0, 200, 6, "#00ffff");

  road(0, 30, 100, 4, "#ff00ff"); 
  road(0, -30, 100, 4, "#ff00ff");

  for(let i = 0; i < 5; i++){
    let x = rnd(-100,-50);
    let z = rnd(-100,100);
    building(x,0,z);
  }

  for(let i = 0; i < 5; i++){
    let x = rnd(50,100);
    let z = rnd(-100,100);
    building(x,0,z);
  }

  for(let i = 0; i < 50; i++){
    let x = rnd(-100,100);
    let z = rnd(-100,100);
    cloud(x,30,z);
  }
 
   
  for (let i=0; i<100; i++){
    let x = rnd(-100,100);
    let z = rnd(-100,100);
    let y = rnd(-5,-1);

    let rocket = new Rocket(x,y,z);
    rockets.push(rocket);
  }

  for(let i=0; i<100; i++){
    let x = rnd(-100,100);
    let z = rnd(-100,100);

    let ufo = new UFO(x,50,z);
    ufos.push(ufo);
  }

  
  

  loop();
})

function loop(){
  for (let rocket of rockets){
    rocket.launch();
  }
  
  for(let ufo of ufos){
    ufo.invade();
  }
  
  window.requestAnimationFrame( loop );
}

function building(x,y,z){
  let b=document.createElement("a-entity");

  let h = rnd(20, 50);
  let building=document.createElement("a-box");
  building.setAttribute("width", 5);
  building.setAttribute("height", h);
  building.setAttribute("depth", 10);
  building.setAttribute("color", "#999");
  building.setAttribute("position", { x: 0, y: h/2, z: 0 });
  b.append(building);

  let window1 = document.createElement("a-box");
  window1.setAttribute("width", 1);
  window1.setAttribute("height", 1.5);
  window1.setAttribute("depth", 0.1);
  window1.setAttribute("color", "skyblue");
  window1.setAttribute("opacity","0.5");
  window1.setAttribute("position", { x: -1.5, y: h / 3, z: 5.05 });
  b.append(window1); 
  
  let window2 = document.createElement("a-box");
  window2.setAttribute("width", 1);
  window2.setAttribute("height", 1.5);
  window2.setAttribute("depth", 0.1);
  window2.setAttribute("color", "skyblue");
  window2.setAttribute("opacity","0.5");
  window2.setAttribute("position", { x: 1.5, y: h / 3, z: 5.05 });
  b.append(window2);

  let window3 = document.createElement("a-box");
  window3.setAttribute("width", 1);
  window3.setAttribute("height", 1.5);
  window3.setAttribute("depth", 0.1);
  window3.setAttribute("color", "skyblue");
  window3.setAttribute("opacity","0.5");
  window3.setAttribute("position", { x: 1.5, y: h / 2, z: 5.05 });
  b.append(window3);

  let window4 = document.createElement("a-box");
  window4.setAttribute("width", 1);
  window4.setAttribute("height", 1.5);
  window4.setAttribute("depth", 0.1);
  window4.setAttribute("color", "skyblue");
  window4.setAttribute("opacity","0.5");
  window4.setAttribute("position", { x: -1.5, y: h / 2, z: 5.05 });
  b.append(window4);

  let window5 = document.createElement("a-box");
  window5.setAttribute("width", 1);
  window5.setAttribute("height", 1.5);
  window5.setAttribute("depth", 0.1);
  window5.setAttribute("color", "skyblue");
  window5.setAttribute("opacity","0.5");
  window5.setAttribute("position", { x: -1.5, y: h /1.5, z: 5.05 });
  b.append(window5);

  let window6 = document.createElement("a-box");
  window6.setAttribute("width", 1);
  window6.setAttribute("height", 1.5);
  window6.setAttribute("depth", 0.1);
  window6.setAttribute("color", "skyblue");
  window6.setAttribute("opacity","0.5");
  window6.setAttribute("position", { x: 1.5, y: h /1.5, z: 5.05 });
  b.append(window6);

  let light = document.createElement("a-box");
  light.setAttribute("width", 5.5);
  light.setAttribute("height", 0.3);
  light.setAttribute("depth", 0.1);
  light.setAttribute("position", { x: 0, y: h - 0.5, z: 5.05 });
  light.setAttribute("color", "yellow");
  b.append(light);

  b.setAttribute("position", { x: x, y: 0, z: z });
  scene.append(b);

}

function cloud(x,y,z){
  let cloud=document.createElement("a-sphere");
  cloud.setAttribute("radius", rnd(1,5));
  cloud.setAttribute("color", "white");
  cloud.setAttribute("opacity", "0.6");
  cloud.setAttribute("position", {x:x, y:y, z:z});

  scene.append(cloud);
}

function road(x, z, length = 200, width = 5, color = "#00ffff") {
  let road = document.createElement("a-plane");
  road.setAttribute("width", length);
  road.setAttribute("height", width);
  road.setAttribute("rotation", "-90 0 0");
  road.setAttribute("color", color);
  road.setAttribute("emissive", color);
  road.setAttribute("opacity", "0.8");
  road.setAttribute("roughness", "0.2");
  road.setAttribute("position", { x: x, y: 0.05, z: z });
  scene.append(road);
}
  
