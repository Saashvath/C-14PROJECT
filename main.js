function preload(){


}


function setup(){

    video = createCapture(VIDEO)
    video.size(600,800)
    canvas = createCanvas(675,675)
    canvas.center()
    posenet = ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotPoses)
}



function draw(){

    background("#964B00")
}

function modelLoaded(){

    console.log("Model has been sucessfuly loaded!")
    
}

function gotPoses(result){

    if( result.length >0){

        console.log(result)

    }
}