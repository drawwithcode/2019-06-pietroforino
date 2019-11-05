var fck
var drops = [];
var c = 0;
var arr;
var num = 100; //numero f*ck
var randomizza;
var cl;
var hi;
var up;
var slider;
var valore;
//aggiornato

var sketch = function(p) {
  p.preload = function() {
    bg = p.loadImage('assets/bg.png');
    fck = p.loadImage('assets/fck.png');
    nk = p.loadImage('assets/nike.png');
    cl = p.loadImage('assets/clap.png');
    hi = p.loadImage('assets/hi.png');
    up = p.loadImage('assets/up.png')
  }

  p.setup = function() {
    cnv = p.createCanvas(700, 500);
    cnv.position(p.windowWidth / 2 - 350, p.windowHeight / 2 - 250)   //canvas in exact middel of screen
    arr = [p.ARROW, p.CROSS, p.HAND, p.MOVE, p.TEXT, p.WAIT];
    for (var i = 0; i < num; i++) {
      drops[i] = new newFck();
    }

    var button = p.createButton('randomize the emoji');
        button.position(p.windowWidth/2-60, p.windowHeight/12*10);
        button.mouseClicked(function() {
          var emoji = [cl, hi, up, fck];    //random emoji function on click
            fck = p.random(emoji);
        });

    var slider = p.createSlider(1, 16, 10); //slider cor changing size of emoji
        slider.position(p.windowWidth/2-62, p.windowHeight/13*11.5);
        valore = slider.value();
        p.createP("move the slider to change the sizes of the emoji")

  }



  p.draw = function() {
    p.background(bg);

    //random cursor
    c++;
    p.cursor(arr[c]);
    if (c >= arr.length) {  //cursor get mad on canvas
      c = 0;
    }
    //nike in centro allo schermo
    p.image(nk, p.windowWidth / 4 - 210, p.windowHeight / 4 - 67, 420, 115)   //nike in middle of canvas

    for (var i = 0; i < drops.length; i++) {  //function emoji falling
      drops[i].fall();
      drops[i].show();
    }

  }

}
var p = new p5(sketch);

//emoji rain
function newFck() {
  this.x = p.random(p.width);
  this.y = p.random(-500, -50);
  this.z = p.random(-5, 20);
  this.par = p.map(this.z, 0, 20, 10, 20);
  this.yspeed = p.map(this.z, 0, 20, 1, 20);
  this.val = valore;

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = p.map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > p.height) {
      this.y = p.random(0, -100);
      this.yspeed = p.map(this.z, 0, 20, 4, 10);
    }
  }

  this.show = function() {
    p.image(fck, this.x, this.y, valore + this.par, valore*2.5 + this.par) //emoji creation
  }
}

// function changeEmoji() {
//   var emoji = [cl, hi, up, fck];
//   for (var i = 0; i < emoji.length; i++) {
//     fck = emoji[i];
//   }
// }
