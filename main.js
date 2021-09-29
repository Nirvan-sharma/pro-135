function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(390,300);
    video.position(485,248);
}

function draw(){
    image(video,0,0,390,300);
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
}