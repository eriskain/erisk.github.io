let img1;
let img2;
let img3;
let img4;

function preload(){
  img1 = createImg('../assets/upsmile1.PNG', 'upsmile1');
  img2 = createImg('../assets/clownsmile.PNG', 'clownsmile');
  img3 = createImg('../assets/3smile.PNG', '3smile');
  img4 = createImg('../assets/downsmile.PNG', 'downsmile');
}

function setup() {
  // put setup code here
  createCanvas(1920,1080);
    img1.position(500, 900);
    img1.size(150, 150)

    img2.position(700, 900);
    img2.size(150, 150)

    img3.position(900, 900);
    img3.size(150, 150)

    img4.position(1100, 900);
    img4.size(150, 150)
}

function draw() {
  // put drawing code here
  background(76, 100, 94);

  // left wall
  fill(53, 61, 59);
  rect(0, 0, 550, 800);
  fill(44, 57, 54);
  rect(0, 0, 320, 1080);
  fill(64, 88, 82);
quad(320, 0, 450, 180, 450, 900, 320, 1080);

  // middle alley

  // lamp POST
  fill(51, 80, 61);
  rect(1280, 150, 50, 900);
  fill(51, 80, 61);
  rect(1275, 180, 100, 10);
  )

  // right wall


  textSize(50)
  text('Notice the Lamp Post', 600, 180);
}
