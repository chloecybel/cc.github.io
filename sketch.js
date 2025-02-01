

function setup(){
    createCanvas (windowWidth, windowHeight);
}

function draw(){
    
    fill('pink');
    stroke('plum')
    for(var i = 1; i < 1700; i++){
        circle((i*17)%width,(i*17)%height,7,7);
    }
    fill('plum');
    stroke('pink');
    if(mouseX < 100){
        triangle(mouseX,mouseY,100,500,100,100,100,100);
    }else{
        triangle(mouseX, mouseY, 100,500,100,100,100,100);
    }

}