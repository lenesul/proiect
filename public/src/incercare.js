<script>
    var i=0;
    var c= getElementbyId("myCanvas");
    var context= c.getcontext("2d");
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
                
                context.strokeStyle="#a3d1a3";
                context.strokeRect(100,100,40,40);

                context.strokeStyle="#936e62";
                context.strokeRect(180,180,50,50);

                context.strokeStyle="#8861a4";
                context.strokeRect(280,280,80,80);

                context.strokeStyle="#cc6699";
                context.strokeRect(400,400,100,100);
                context.stroke();
                context.closePath();
                i+=1;
                if(i>=360) clearInterval(p);
            }
    }
    p=setInterval(draw(),20);
    </script>