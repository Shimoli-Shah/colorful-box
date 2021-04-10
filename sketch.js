var canvas;
var music;
var box;
var rect1, rect2, rect3, rect4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box = createSprite(10, 10, 20, 20)
    box.shapeColor = "white";
    rect1 = createSprite(0, 580, 360, 30)
    rect1.shapeColor = "blue";
    rect2 = createSprite(295, 580, 200, 30)
    rect2.shapeColor = "yellow";
    rect3 = createSprite (515, 580, 200, 30)
    rect3.shapeColor = "green";
    rect4 = createSprite(740, 580, 220, 30)
    rect4.shapeColor = "purple";
    

    //create box sprite and give velocity
     box.velocityX = 10;
     box.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
     box.bounceOff(edges);

     //add condition to check if box touching surface and make it box
    if(box.isTouching(rect1)){
         box.shapeColor = "blue";
        music.play();
        box.bounceOff(rect1);
     }
     if(box.isTouching(rect2)){
        box.shapeColor = "yellow";
        music.play();
        box.bounceOff(rect2);
    }
    if(box.isTouching(rect3)){
        box.shapeColor = "green";
        music.play();
        box.bounceOff(rect3);
    }
    if(box.isTouching(rect4)){
        box.shapeColor = "purple";
        music.play();
        box.velocityX = 0;
        box.velocityY = 0;
    }
    
    drawSprites();
}
