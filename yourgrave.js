
function nameSubmitted(){
    uname = inpField.value();
    cam.setPosition(200,-20, 1550);
    cam.lookAt(100, -50, 0);
    introScrShown = false;
}

function introScreen() {
    push();
    translate(100, -1000, 1450);
    //rotateY(HALF_PI);
    texture(intro);
    plane(1920, 1080);
    pop();
}

function yourGrave() {
    //tomb inscription
    let pg = createGraphics(210, 320);
    pg.textSize(18);
    pg.textFont(font);
    //pg.textAlign(CENTER);
    pg.background(125, 153, 152);
    pg.text('IN LOVING MEMORY\n\n', 8, 50, 200);
    pg.textAlign(CENTER);
    pg.textSize(40);
    pg.text(uname,85,120, 50);

    
    push();
    translate(-FOR_SIZE + FOR_SIZE / 6, 0, 2100);
    rotateY(HALF_PI);

    //huge tree
    push();
    scale(500);
    texture(treeTXT[2]);
    model(trees[2]);
    pop();

    //your grave
    push();
    translate(FOR_SIZE/2.1, -30, FOR_SIZE/8);

    //inscription
    push();
    texture(pg);
    translate(68,70,-202);
    rotateX(PI);
    rotateY(PI-PI/3);
    plane(30,50);
    pop();

    rotateY(-PI/6);
    scale(90);
    //noStroke();
    fill(125, 153, 152);
    model(tombs[2]);
    pop();


    //tulips
    push();
    translate(FOR_SIZE/2+50, 20, FOR_SIZE/10-110);
    rotateX(HALF_PI);
    rotateY(PI/8);
    scale(3);
    texture(flowerTXT[0]);
    model(flowers[0]);
    pop();


    pop();

    //your grave
}