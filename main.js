noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(550,400);
    canvas.position (560,150);
    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw() {
    background("#9af720");
    fill("#15b9eb");
    stroke("#15b9eb");
    square(noseX , noseY , difference);

    document.getElementById("square_sides").innerHTML = "Width And Height Of The Square = " + difference + "px";
}
function modelLoaded() {
    console.log("PoseNet is Loaded")
}
function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "  noseY = " + noseY);

        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("rightWristX = " + rightwristX + "  leftWristX =    " + leftwristX + "  Difference = " + difference);
    }
}