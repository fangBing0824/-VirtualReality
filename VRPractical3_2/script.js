let scene;
let snowmen = [];
let ufos = [];
let snowflakes=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")

  for(let i = 0; i < 20; i++){
    snowmen.push(new Snowman(rnd(-20, 20), 0, rnd(-20, 20)));
  }

  for(let i = 0; i < 3; i++){
    ufos.push(new UFO(rnd(-20, 20), 10, rnd(-20, 20)));
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let snowflake = new Snowflake(x,z);
    snowflakes.push(snowflake);
  }
     
  loop();
})


function loop(){

  for(let i = 0; i < snowmen.length; i++){
    snowmen[i].update();
  }

  for(let i = 0; i < ufos.length; i++){
    ufos[i].update();
    // console.log("ufos[i].y: ", ufos[i].y);
  }

  for (let flake of snowflakes) {
    flake.fall();
  }

  window.requestAnimationFrame(loop);
}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

