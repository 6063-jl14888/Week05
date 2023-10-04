//let xPos0 = 0;
//let yPos0 = 150;
//let xVel0 = 2;
//let cDiam0 = 40;

//let xPos1 = 0;
//let yPos1 = 300;
//let xVel1 = 4;
//let cDiam1 = 60;

//let xPos2 = 0;
//let yPos2 = 400;
//let xVel2 = 6;
//let cDiam2 = 80;

//不需要上面所有的东西，简化了每一个单独表明的过程，后面数字的顺序是xpos1,2,3,4...的顺序
//let xPos = [0, 0, 0, 0, 0];
//let yPos = [150, 250, 350, 500, 600];
//let xVel = [2, 3, 4, 2, 3, 4];
//let cDiam = [40, 40, 40, 40, 40, 40];



let xPos = [];
let yPos = [];
let xVel = [];
let cDiam = [];

let numCircles = 10;

let myCircles = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i =0; i<numCircles; i++){
    let myCircle = {
      x: 0,
      y: random(30, height-30)
      v: random(2,5)
      d: random(20,70)
      myCircles()
  }
  

 // for (let i = 0; i < numCircles; i++) {
  //  xPos.push(0);
  //  yPos.push(random(30, height-30));
 //   xVel.push(random(2,5));
  //  cDiam.push(random(20,70));
 // }
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);

 for(let i = 0; i<myCircles.length; i +=1){
  let myCircle = myCircles(i)

  ellipse(myCircle.x, myCircle.y, )
 }


  //for(let i=0; i<numCircles; i += 1){
    //ellipse(xPos[i], yPos[i], cDiam[i], cDiam[i]);
    //xPos[i] = xPos[i] + xVel[i];


    //if (xPos[i] > width + cDiam[i]) {
      //cDiam[i] = random(20, 75);
     // xPos[i] = 0 - cDiam[i];
    //}
  }

  //for(let i=0; i<6; i += 1){
   //ellipse(xPos[i], yPos[i], cDiam[i], cDiam[i]);
    //xPos[i] = xPos[i] + xVel[i];


    //if (xPos[i] > width + cDiam[i]) {
      //cDiam[i] = random(20, 75);
     // xPos[i] = 0 - cDiam[i];
   // }
  //}

  // draw circle
  //ellipse(xPos[0], yPos[0], cDiam[0], cDiam[0]);
  //ellipse(xPos1, yPos1, cDiam1, cDiam1);
  //ellipse(xPos2, yPos2, cDiam2, cDiam2);

  // update pos
  //xPos[0] = xPos[0] + xVel[0];
  //xPos1 = xPos1 + xVel1;
  //xPos2 = xPos2 + xVel2;

  // if reset is needed: pick random diameter and reset x
  //if (xPos[0] > width + cDiam[0]) {
    //cDiam[0] = random(20, 75);
    //xPos[0] = 0 - cDiam[0];
  //}

 // if (xPos1 > width + cDiam1) {
 //   cDiam1 = random(20, 75);
   // xPos1 = 0 - cDiam1;
  //}

 // if (xPos2 > width + cDiam2) {
   // cDiam2 = random(20, 75);
    //xPos2 = 0 - cDiam2;
  //}
//}
