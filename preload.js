
//models
let trees = [];
let treeTXT = [];
let rock;
let rockTXT;
let graves = [];
let sgraveTXT;
let tombs = [];
let flowers = [];
let flowerTXT = [];
//font
let font;
//skybox shader
let skyboxShader;
let skybox = [];
//bgm
let bgm;
let sfx;
//intro screen
let intro;


function preloadObj(){
    //rock with texture
    rock = loadModel('assets/rock1.obj');
    rockTXT = loadImage('assets/textures/rock1.png');

    //trees with textures
    trees[0] = loadModel('assets/tree3.obj');
    trees[1] = loadModel('assets/tree5.obj');
    trees[2] = loadModel('assets/tree6.obj');
    trees[3] = loadModel('assets/tree8.obj');
    trees[4] = loadModel('assets/tree10.obj');
    trees[5] = loadModel('assets/tree11.obj');

    treeTXT[0] = loadImage('assets/textures/tree3.png');
    treeTXT[1] = loadImage('assets/textures/tree5.png');
    treeTXT[2] = loadImage('assets/textures/tree6.png');
    treeTXT[3] = loadImage('assets/textures/tree8.png');
    treeTXT[4] = loadImage('assets/textures/tree10.png');
    treeTXT[5] = loadImage('assets/textures/tree11.png');

    //graves. only 4 has a texture
    graves[0] = loadModel('assets/grave2.obj');
    graves[1] = loadModel('assets/grave6.obj');
    graves[2] = loadModel('assets/grave8.obj');
    graves[3] = loadModel('assets/grave9.obj');

    //tombs
    tombs[0] = loadModel('assets/grave1.obj');
    tombs[1] = loadModel('assets/grave17.obj');
    tombs[2] = loadModel('assets/grave13.obj');

    //flowers with textures
    flowers[0] = loadModel('assets/tulip.obj'); //tulip
    flowers[1] = loadModel('assets/yellow.obj'); //yellow flowers
    
    flowerTXT[0] = loadImage('assets/textures/tulip.png');
    flowerTXT[1] = loadImage('assets/textures/yellow.png');

    //font
    font =loadFont('assets/NanumMyeongjo.ttf');

    //shader
    skyboxShader = loadShader('skybox.vert', 'skybox.frag'); 

    skybox[0] = loadImage('assets/textures/left.png');
    skybox[1] = loadImage('assets/textures/right.png');
    skybox[2] = loadImage('assets/textures/up.png');
    skybox[3] = loadImage('assets/textures/down.png');
    skybox[4] = loadImage('assets/textures/front.png');
    skybox[5] = loadImage('assets/textures/back.png');

    //intro screen
    intro = loadImage('assets/textures/veni vidi vixi.png');

    //bgm
    bgm = loadSound('assets/The Things That Keep Us Here.mp3');
    sfx = loadSound('assets/nature.mp3');
}