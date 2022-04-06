img="";
status="";
objects=[];

function setup()
{canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modalLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";}

function preload()
{img=loadImage("Traffic.jpg");}

function draw()
{image(img,0,0,640,420);
if (status!="")
{for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status : Object Detected";
fill("#0320fc");
percent=floor(objects[i].confidence*100);
text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("#0320fc");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}}}

function modalLoaded()
{console.log("modalloaded");
status="true"
objectDetector.detect(img,gotResult);}

function gotResult(error,results)
{if(error)
{console.log(error);}
console.log(results);
objects=results;}