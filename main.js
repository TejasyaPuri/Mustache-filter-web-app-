musx=0;
musy=0;

function preload()
{
    mus = loadImage("https://i.postimg.cc/JzmvTKgG/mustache-15020.png");
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(mus,musx,musy,55,45);
}

function take_snapshot()
{
     save("Mustache filter image");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        musx=results[0].pose.nose.x-27;
        musy=results[0].pose.nose.y-5;
        console.log("mustache x =" +results[0].pose.nose.x);
        console.log("mustache y =" +results[0].pose.nose.y);
    }
}