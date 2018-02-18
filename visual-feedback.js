var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playingA, playingS, playingD, playingF;
var aColor = "#ADDCCA";
var sColor = "#DCEBC2";
var dColor = "#FED2B7";
var fColor = "#F7A8A4";
var w = 200;
var h = 80;

function setup() {

  playingA = false;
  playingS = false;
  playingD = false;
  playingF = false;

  createCanvas(500, 800);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();

  text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);

}

function visualFeedback() {

  var width = 140;
  var textColor = 20;

  textSize(18);

  noStroke();

  if (playingA) {
    fill(aColor);
    rect(30, 100, width, h);
    fill(textColor);
    text('A', 100, 150);    
  } else if (playingS) {
    fill(sColor);
    rect(30, 100, width, h);
    fill(textColor);
    text('S', 100, 150);   
  } else if (playingD) {
    fill(dColor);
    rect(30, 100, width, h);
    fill(textColor);
    text('D', 100, 150);   
  } else if (playingF) {
    fill(fColor);
    rect(30, 100, width, h);
    fill(textColor);
    text('F', 100, 150);   
  }


}

function draw() {
  
  visualFeedback();
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = true;
  } else if (key == 'S') {
    osc = oscS;
    playingS = true;
  } else if (key == 'D') {
    osc = oscD;
    playingD = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
  }

}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = false;
  } else if (key == 'S') {
    osc = oscS;
    playingS = false;
  } else if (key == 'D') {
    osc = oscD;
    playingD = false;
  } else if (key == 'F') {
    osc = oscF;
    playingF = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
  }
  
}

