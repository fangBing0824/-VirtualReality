/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "-----C-------------------",
  "T-BBBBB--BBBBBBBBBBBBBBB-T",
  "T-B----B-------B-------B-T",
  "T-B--B-B-BSBB--B-BBBB--B-T",
  "T-B-B----B----BB---B---B-T",
  "T-B-BSBB-B-BBB----BBBB-B-T",
  "T-B------B--B-S--B----BB-T",
  "T-BBBBBB-BBBSBBBB-B-B--B-T",
  "T-B---S--B-----B--B-B--B-T",
  "T-B--BBB-B-BBBBB--B-B--B-T",
  "T-B----B-B--S---B----B-B-T",
  "T-B-BB-BBB---BB-BBBB-B-B-T",
  "T-B-BB----S----B---------T",
  "T-BBBBBBBBBBBBBBBBBBB-BBB-",
  "TTTTTTTTTTTTTTTTTTT---TT-"
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
  
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */

    let row = maze[r];
    for (let c=0; c< row.length;c++){
     let ch = row[c];

     let x=c;
     let z=-r;
     let y=0.5;

     if (ch =="B"){
      new Block(x,y,z);
    }
      if (ch=="T"){
      new Tree(x,y,z);
    }

    if (ch =="S"){
      new Treasure(x,y,z);
    }

    if (ch =="C"){
      new Sign(x,1,z);
    }
   }
  }

})