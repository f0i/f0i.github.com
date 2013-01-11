// js for animated dots
canvas=document.getElementById("canvas");

cont=canvas.getContext("2d");
dots = [];
size = 3;
dmax = size;
update = 50;
fadeupdate = 100;
fadestep = 0.2;
dotcols = ['gold', 'red', 'green', 'blue'];
background = "0,0,0"

function create(n){
  t = this;
  t.color = dotcols[n % dotcols.length];
  t.r = t.s = 0;
  t.v = t.w = 1;
  t.dx = t.dy = 0;
  t.x = canvas.width / 2;
  t.y = canvas.height / 2;
  dots[n] = t;
  setInterval('dots[' + n + '].U()', update);
}

create.prototype.U = function(){
  t = this;
  t.dx += Math.random() - 0.5;
  t.dy += Math.random() - 0.5;
  if(t.dx > dmax || t.dx < -dmax){
    t.dx*=0.9;
  }
  if(t.dy > dmax || t.dy < -dmax){
    t.dy *= 0.9;
  }
  t.x += t.dx;
  t.y += t.dy;
  if(t.x >= canvas.width || t.x <= 0){
    t.dx *= -1;
    t.x+=t.dx;
  }
  if(t.y >= canvas.height || t.y <= 0){
    t.dy *= -1;
    t.y+=t.dy;
  }
  cont.fillStyle = t.color;
  cont.fillRect(t.x, t.y, size, size);
};

function fade(){
  cont.fillStyle = 'rgba(' + background + ',' + fadestep + ')';
  cont.fillRect(0, 0, canvas.width, canvas.height);
}

for(var i=0; i<30; i++){
  var n=new create(i);
}

setInterval('fade()', fadeupdate);
