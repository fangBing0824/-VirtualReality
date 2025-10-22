let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
    
    let cloud = new Cloud(x,5,z);
  }

  for(let p=0; p<10; p++){
    let x=rnd(20,40);
    let z=rnd(-20,20);
    let house = new House(x,0,z);

    let cloud = new Cloud(x,5,z);
  }

  for(let p1=0; p1<10; p1++){
    let x=rnd(-40,-20);
    let z=rnd(-20,20);
    let house = new House(x,0,z);

    let cloud = new Cloud(x,5,z);
  }
  
})
