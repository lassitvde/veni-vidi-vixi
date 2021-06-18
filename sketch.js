//for generating the forest
let forestmap = [];
let FOR_SIZE = 2800;
let OBJ_MAX_SIZE = 100;
let gridSize = FOR_SIZE / OBJ_MAX_SIZE;
//camera variables
let cam;
let cspeed = 2;
//inpField
let button;
let inpField;

//name
let uname = "John Doe"

//boolean vars
let introScrShown = true;

function preload() {
  preloadObj();
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  perspective(PI / 2.8, width / height, 0.1, width * 5);
  angleMode(RADIANS);
  noStroke();

  //skybox setup
  setupCubeMap();

  // init forestmap
  for (let i = 0; i < gridSize; i++) {
    forestmap[i] = [];
    for (let j = 0; j < gridSize; j++) {
      forestmap[i][j] = false;
    }
  }
  //create inpField & submit button 
  inpField = createInput('');
  inpField.size(150);
  inpField.position(0,0);
  button = createButton('enter your name');
  button.position(150, 0);
  button.mousePressed(nameSubmitted);

  //init camera
  cam = createCamera();
  cam.setPosition(100, -1000, 2100);
  cam.lookAt(100, -1000, 1050);
  // cam.setPosition(-1337,-50, -2660);
  // cam.lookAt(-1437,-50, -2860);
  bgm.loop();
  sfx.loop();
  sfx.setVolume(0.5);

}

function draw() {
  //background(0);
  renderSkyBox(); //render skybox

  randomSeed(2);

  //lights
  pointLight(255, 99, 15, 0, -250, -3500); //orange
  pointLight(209, 130, 130, 2000, -150, 0); //pink
  ambientLight(99, 122, 214);
  
  //draw ground
  //noStroke();
  push();
  rotateX(HALF_PI);
  noStroke();
  fill(1, 33, 7);
  plane(8000);
  pop();

  push();
  translate(-FOR_SIZE / 2, 0,0);
  rotateX(HALF_PI);
  drawObjs();
  yourGrave();
  pop();
  //noFill();
  //translate(FOR_SIZE / 2, 0, 0);
  
  

  if (introScrShown) introScreen();
  else moveCamera();

}

//reset forest map
function resetForestMap() {
  for (let i = 0; i < gridSize; i++)
    for (let j = 0; j < gridSize; j++) {
      forestmap[i][j] = false;
    }
}

//camera control function
function moveCamera() {
  var x = map(mouseX, 0, width, 0.01, -0.01);
  var y = map(mouseY, 0, height, -0.01, 0.01);

  if (mouseIsPressed) {
    cam.pan(x);
    cam.tilt(y);
  }

  if (cam.eyeY >= -20) cam.setPosition(cam.eyeX, -20, cam.eyeZ);
  if (cam.eyeY <= -80) cam.setPosition(cam.eyeX, -80, cam.eyeZ);

  if (keyIsPressed === true) {
    if (key == 'w') {
      cam.move(0, 0, -cspeed);
    } else if (key == 's') {
      cam.move(0, 0, cspeed);
    } else if (key == 'a') {
      cam.move(-cspeed, 0, 0);
    } else if (key == 'd') {
      cam.move(cspeed, 0, 0);
    }
  }
  //console.log(cam.eyeX, cam.eyeY, cam.eyeZ);
}

//draw forest objects
function drawObjs() {
  
  let nTrees = 750
  translate(FOR_SIZE- FOR_SIZE/4, -FOR_SIZE /2 -FOR_SIZE/4, 0);
  
  rotateX(HALF_PI);
  for (let i = 0; i < nTrees; i++) {
    let foundEmptySpot = false;
    let x = 0, y = 0;
    // loop until it finds an empty spot
    while (foundEmptySpot == false) {
      x = floor(random(0, gridSize));
      y = floor(random(0, gridSize));
      if (forestmap[x][y] == false) {
        foundEmptySpot = true;
        forestmap[x][y] = true;
      }
    }
    push();
    //trees
    if (i%2==0) {
      var s = random(30,230);
      var tType = int(random(6));

      translate(-x * OBJ_MAX_SIZE, 0, -y * 1.6 * OBJ_MAX_SIZE);

      push();
      scale(s);
      noStroke();
      texture(treeTXT[tType]);
      model(trees[tType]);
      pop();

    } else if (i%3==0) { //magnolia flowers
      var s = random(0.2,1.2);

      translate(-x * OBJ_MAX_SIZE, 0, -y * 1.5 * OBJ_MAX_SIZE);
      push();
      scale(s);
      noStroke();
      texture(flowerTXT[1]);
      model(flowers[1]);
      pop();

    } else if (i%5==0) { //rocks
      var s = random(2,50);

      translate(-x * 0.9 * OBJ_MAX_SIZE, 0, -y * 1.6 * OBJ_MAX_SIZE);
      push();
      scale(s);
      rotateY(s);
      noStroke();
      texture(rockTXT);
      model(rock);
      pop();
    } else if ((i%7==0 || i%15==0) && (x>gridSize/3 && y < gridSize/1.5)) { //graves
      var gType = int(random(4));
      var rot = random(PI);

      translate(-x * OBJ_MAX_SIZE, 0, -y * 1.6 * OBJ_MAX_SIZE);

      push();
      translate(0, -20);
      rotateY(rot);
      scale(50);
      //noStroke();
      fill(125, 153, 152);
      model(graves[gType]);
      pop();
    } else if ((i%11==0 || i%13==0) && (x > gridSize/2 && y < gridSize/2)) { //tombs
      var toType = int(random(2));
      var rot = random(PI);

      translate(-x * 1.2 * OBJ_MAX_SIZE, 0, -y * 2 * OBJ_MAX_SIZE);

      push();
      translate(0, -20);
      rotateY(rot);
      scale(50);
      //noStroke();
      fill(125, 153, 152);
      model(tombs[toType]);
      pop();

    } else {

    }    

    pop();
  }
  
  resetForestMap();
}
