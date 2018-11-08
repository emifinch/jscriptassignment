//Colleen said it was okay to have: default red, dotted lines, and mousedown to draw instead of just mouse in the canvas area//
var canvas = document.getElementById('canvas'); 
var context= canvas.getContext('2d');
var radius=8; 
var dragging=false;
context.fillStyle = "red"

context.lineWidth=radius*2;

var putPointer=function(e){
    if(dragging){
        // context.lineTo(e.clientX, e.clientY);
        // context.stroke();
        context.beginPath();
        // context.fillStyle = color;
        context.arc(e.clientX, e.clientY,radius,0,Math.PI*2);
        context.fill();  
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
}

var engage=function(e){
    dragging=true;
    putPointer(e);
}

var disengage=function(){
    dragging=false;
    context.beginPath();
}

canvas.addEventListener('mousedown',engage);
canvas.addEventListener('mousemove', putPointer);
canvas.addEventListener('mouseup',disengage);
window.addEventListener('keydown', function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 66){
        context.fillStyle = "blue";
    }
    if(e.keyCode== 71){
        context.fillStyle = "green"; 
    }
    if(e.keyCode==89){
        context.fillStyle = "yellow"; 
    }
    if(e.keyCode== 82){
        context.fillStyle = "red"; 
    }
    if(e.keyCode== 32){
        context.clearRect(0, 0, canvas.width, canvas.height);
        e.preventDefault();
    } 
    if(e.keyCode== 40){
        if(radius>2)
            radius=radius-2;        
    } 
    if(e.keyCode== 38){
        radius=radius+2;
    } 
})

