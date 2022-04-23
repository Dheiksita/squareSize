noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(220,150)

    canvas=createCanvas(550,500);
    canvas.position(900,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults);
}
function draw(){
    background(172, 255, 255);
    stroke(247, 62, 96);
    fill(255, 145, 173);
    square(noseX,noseY,difference);
    document.getElementById("squareSize").innerHTML="length of the square= "+difference+" px";
}
function modelLoaded(){
    console.log('posenet is initialised');
}
function gotResults(results){
    if (results.length>0){
        console.log(gotResults);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+" noseY= "+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("rightWristX= "+rightWristX+" leftWristX= "+leftWristX);

        difference=floor(leftWristX-rightWristX);
        console.log("difference= "+difference);
    }
}

