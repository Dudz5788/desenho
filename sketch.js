function setup() {
    createCanvas(600, 600);
    background("brown");
  }
  
  function draw() {
    
    stroke("pink");
    fill("pink");
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 50);
    }
  }
  