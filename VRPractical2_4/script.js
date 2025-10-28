let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets=[];
let ufos=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
 
   
  for (let i=0; i<100; i++){
    let x = rnd(-50,60);
    let z = rnd(-50,60);

    let rocket = new Rocket(x,0,z);
    rockets.push(rocket);
  }

  for(let i=0; i<100; i++){
    let x = rnd(-50,60);
    let z = rnd(-50,60);

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
