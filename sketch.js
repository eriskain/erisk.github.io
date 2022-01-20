function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function setup() {

  createCanvas(720, 480);  //do not touch!

  strokeWeight(2);

  ellipseMode(RADIUS);

}

function draw() {

  background(200);

  

  

  // Neck

  stroke(255); // Set stroke to gray

  line(500, 100, 600, 100); // Left

  line(500, 100, 595, 162); // Middle

  line(500, 100, 590, 162); // Right

  

  

  // Antennae

  line(100, 100, 50, 112); // Small

  line(100, 100, 60, 56); // Tall

  line(100, 100, 40, 170); // Medium

  

  

  

  

  // Body

  noStroke(); // Disable stroke

  

  fill(45); // Set fill to black

  rect(200, 200, 120, 90); // Main body 1

  rect(240, 170, 120, 90); // Main body 2

  rect(300, 140, 120, 90); // Main body 3

  rect(360, 180, 120, 90); // Main body 4

  rect(280, 220, 150, 90); // Main body 5

  

  

  



  // Head

  fill("black"); // Set fill to black

  ellipse(276, 400, 45, 45); // Head

  fill(255); // Set fill to white

  ellipse(288, 400, 11, 11); // Large eye

  fill("red"); // Set fill to black

  ellipse(288, 400, 8, 8); // Pupil

  fill("red"); // Set fill to light gray

  ellipse(310, 380, 5, 5); // Small eye 1

  ellipse(255, 430, 4, 4); // Small eye 2

  ellipse(274, 380, 6, 6); // Small eye 3

}