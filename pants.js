/*<!-- https://www.khanacademy.org/computing/cs/programming/animation-basics/p/intro-to-animation -->*/

// define variables

void setup(){

	size(900,1250);
	background(255);
}


void draw (){

background(255,204,0);

var clothingColor = color(162, 255, 125);
var clothingSize = 0.7;
var y=200;
var x=200;

clothingSize = (mouseX/400+0.5);


noStroke();
// draw it, using those variables
fill(clothingColor);
quad(x-clothingSize*86,y-clothingSize*2,x, y,x-clothingSize*51,y+clothingSize*182,x-clothingSize*137, y+clothingSize*180);
quad(x+clothingSize*86,y-clothingSize*2,x, y,x+clothingSize*51,y+clothingSize*182,x+clothingSize*137, y+clothingSize*180);
rect(x-clothingSize*86,y-clothingSize*60,clothingSize*172,50);

stroke(242, 227, 63);
strokeWeight(8);
arc(x,y-clothingSize*40,clothingSize*172,50, 0, PI);

var ourX=x-clothingSize*86;
var ourWidth=ourX+clothingSize*172;

var ourY=y-clothingSize*60;
var ourHeight=ourY+30;



stroke(227, 28, 28);

//var ourX = 200;
//var ourY = 200;
var maxX = ourWidth;
var maxY = ourHeight;

for (var i=ourX; i < maxX; i=i+12){
    for (var j=ourY; j < maxY; j=j+12){
    
    if(j%2===0){
        point(i, j);
    }
        else{
            point(i+7.5,j);
        }
    
    }
}

}




