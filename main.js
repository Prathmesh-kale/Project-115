var mustachex = 0;
var mustachey = 0;

function preload()
{

}

function setup()
{
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded!!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log(mustachex);
        console.log(mustachey);
        mustachex = results[0].pose.mustache.x;
        mustachey = results[0].pose.mustache.y;
    }
}

function draw()
{
    image(video , 0 , 0 , 350 , 350);
}

function take_snapshot()
{
    save("My_Selfie.png");
}