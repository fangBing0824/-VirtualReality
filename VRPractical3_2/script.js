let scene;
let snowmen = [];
let ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")

  for(let i = 0; i < 5; i++){
    snowmen.push(new Snowman(rnd(-10, 10), 0, rnd(-10, 10)));
  }

  for(let i = 0; i < 3; i++){
    ufos.push(new UFO(rnd(-10, 10), 10, rnd(-10, 10)));
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

  window.requestAnimationFrame(loop);
}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

