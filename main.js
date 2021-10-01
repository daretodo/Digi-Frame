


function draw(){
   image(video, 150 ,50 , 300 , 300)
    fill("red");
    stroke("red");
    circle(50,30,50  )
    fill("red");
    stroke("red");
    circle(550,30,50  )
    fill("red");
    stroke("red");
    circle(550,370,50  )
    fill("red");
    stroke("red");
    circle(50,370,50  )
    fill("orange");
    stroke("orange");
    rect(100,10,400,30)
    fill("orange");
    stroke("orange");
    rect(100,360,400,30)
    fill("orange");
    stroke("orange");
    rect(20,70,30,250)
    fill("orange");
    stroke("orange");
    rect(530,70,30,250)
}
function setup(){
   canvas = createCanvas(600,400);
   canvas.center();
   video = createCapture(VIDEO);
   
   video.hide();
}



function take_snapshot(){
save("ThePictureYouTook.png");
}            


     
