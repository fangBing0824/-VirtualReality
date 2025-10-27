let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let snowflakes = [];



window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let tree = new Tree(rnd(-20,20), 0 , rnd(-20,20));
    tree.scale(rnd(1,4));
  }
  snowman = new Snowman(-5,0);
  //Challenge 3: Create a cloud at some high position. Don't forget to declare the variable up top.
  cloud = new Cloud(0,15,0);
  
  //Challenge 7: Create a snowflake at some high position. Don't forget to declare the variable up top.
  for (let s= 0; s < 100; s++) {
    let flake = new Snowflake(rnd(-20, 20), 15, rnd(-20, 20));
    snowflakes.push(flake);
  }
  loop();
  
})

function loop(){
  snowman.spin();
  //Challenge 4: Make the cloud fly
  cloud.fly();
  //Challenge 8: Make the snowflake fall
  for (let flake of snowflakes) {
    flake.fall();
  }
  window.requestAnimationFrame(loop);
}
