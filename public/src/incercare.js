<script>
    var i=0;
    var c= getElementbyId("myCanvas");
    var context= c.getcontext("2d");
    function draw()
    {
        context.beginPath();
        context.rotate(3*Math.PI/2);
        context.closePath();
          if(i<360)
            {
                context.beginPath();
                context.strokeStyle="#5ec7e1";
                context.rotate(1*Math.PI/180);
                context.strokeRect(50,50,10,10);
                i+=1;
                if(i>=360) clearInterval(p);
            }
    }
    p=setInterval(draw,20);
    </script>