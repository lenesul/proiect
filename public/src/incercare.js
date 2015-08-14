$( document ).ready(function() {
    var i=0;
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    function draw()
    {
        context.beginPath();
        context.rotate(3*Math.PI/2);
        context.closePath();
        context.beginPath();
        context.strokeStyle="black";
        context.moveTo(20,20);
        context.lineTo(200,200);
        context.stroke();
        context.closePath();
          if(i<360)
            {
                context.beginPath();
                context.strokeStyle="#5ec7e1";
                context.rotate(1*Math.PI/180);
                context.strokeRect(50,50,10,10);
                
                context.stroke();
                context.closePath();
                i+=1;
                if(i>=360) clearInterval(p);
            }
    }
    p=setInterval(draw(),20);
});