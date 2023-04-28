var myRans =[];
var x= 30;
var col=255;
var ballon;
var xP=0;
var g=255;
var h=255;
var v=0;
var cloud1;
var yP=-2306;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	fill(0);
	makeBuilding();
	ballon = loadImage("ballon.png");
	cloud = loadImage("cloud1.png");
}

function draw() {
	background(100);
	fill(col);
	image(cloud,yP,-280);
	image(ballon,xP,40); //the ballon only shows up the first time because only the sun, moon, and cloud would be there multiple times in real life
  drawBuilding();
	xP +=6
	yP +=8
	fill(g,h,v);
	circle(x,30,40);
	g+= 1.5; //variable to gradually change the colour of the sun/moo
	h+= 1.5; //variable to gradually change the colour of the sun/moo
	v+=1.5; //variable to gradually change the colour of the sun/moon
	x+=8;
	col-=1;
	if(col == 0){
	  col=255;
	if (x>width){
		x=30
 g=255;
 h=255;
		v=0;
			fill(255,255,255);
		circle(x,30,40);

		
}

// stroke(255);
	}
		if (yP==2606){
			yP=-2306;} //this is so the cloud "loops"
}

function makeBuilding(){
  for (var i = 0; i < width/50; i++) { 
		var r = int(random(3))+1;
		myRans[i] =r;
		stroke(0);
		rect(50*i, height-100*r, 50, 100*r);
  }
}
function drawBuilding(){
   for (var i = 0; i < myRans.length; i++) { 
		r=myRans[i];
		stroke(255);
		rect(50*i, height-100*r, 50, 100*r);
}
}
// function Moon(){
// 	Moon(x,30,40);
// 	fill(255,255,255)
// }