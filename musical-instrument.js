var freq = 120;
var osc;

function setup() {
	createCanvas(800, 1200);
  	background(240);
  	colorMode(HSB);
  	noStroke();

  	osc = new p5.Oscillator();
  	osc.setType('sine');
  	osc.freq(freq);
  	osc.amp(0);
  	osc.start();
}

function drawStar(x, y) {
	fill(random(30), 200, 255);

	translate(x, y);
	rotate(random(PI));
	beginShape();
  	vertex(26.3, 0);
  	vertex(34.02, 15.65);
  	vertex(51.3, 18.16);
  	vertex(38.8, 30.35);
  	vertex(41.75, 47.55);
  	vertex(26.3, 39.43);
  	vertex(10.85, 47.55);
  	vertex(13.8, 30.35);
  	vertex(1.3, 18.16);
  	vertex(18.57, 15.65);
  	vertex(26.3, 0);
  	endShape();
}

function mousePressed(){
	drawStar(mouseX, mouseY);
	freq = map(mouseX, 0, width, 100, 800);
	osc.freq(freq);
	osc.amp(0.5, 0.1);
}

function mouseReleased(){
	osc.amp(0, 0.5);
}

function draw() {
  
}