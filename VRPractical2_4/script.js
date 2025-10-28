let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets=[];
let ufos=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
 
   
  for (let i=0; i<5; i++){
    let x = rnd(-40,40);
    let z = rnd(-40,40);

    let rocket = new Rocket(x,5,z);
    rockets.push(rocket);
  }

  for(let i=0; i<10; i++){
    let x = rnd(-40,40);
    let z = rnd(-40,40);

    let ufo = new UFO(x,10,z);
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
