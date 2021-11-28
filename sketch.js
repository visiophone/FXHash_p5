// FH_HASH p5 template | @visiophone_lab
// www.visiophone-lab.com

let seed = 0; //seed Hash
let sizee = 0; // rect size
let col = 0; //color


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed); 

  col=int(random(255));
  sizee=int(random(width/2));
 
// FX Features
  window.$fxhashFeatures = {
 "Size" : sizee,
 "Color" : col,
  };

}

function draw() {
  background(255);

stroke(0);
fill(col);

rectMode(CENTER);
rect(width/2,height/2,sizee,sizee);
   
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

