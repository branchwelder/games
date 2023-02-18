// new p5();

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

// Expose the setup/draw functions to the global scope because P5 is annoying
Object.assign(window, { setup, draw });
