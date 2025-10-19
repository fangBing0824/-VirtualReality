let scene,car,pokemonball,rocket,dude,sun ;

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");    
    car = document.querySelector("#car"); 
    pokemonball = document.querySelector("#pokemonball");
    rocket = document.querySelector("#rocket");
    dude = document.querySelector("#dude");
    sun = document.querySelector("#sun");

    car.a=0;
    car.da=0.015;

    pokemonball.r=0;
    pokemonball.dr=1;
 
    rocket.a=0;
    rocket.da=0.3;

    dude.s=0;
    dude.ds=0.005;

    sun.o=0;
    sun.do=0.01;

    loop();
})


function loop(){
/* car is moving to the left */
  car.a += car.da;
  car.setAttribute("position",{x:-car.a, y:0, z:0});
/* pokemonball is rotating */
  pokemonball.r +=pokemonball.dr;
  pokemonball.setAttribute("rotation",{x:pokemonball.r, y:0, z:0});
/* rocket is flying up */
  rocket.a+=rocket.da;
  rocket.setAttribute("position",{x:0, y:rocket.a, z:0});
/* dude is growing up */
  dude.s += dude.ds;
  dude.setAttribute("scale", { x: dude.s, y: dude.s, z: dude.s });
/* sun is fading in */
  sun.o +=sun.do;
  sun.setAttribute("opacity",sun.o);

  window.requestAnimationFrame(loop);
}


