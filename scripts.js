 function getRandomColor(){
            var letter="0123456789ABCDEF";
            var color="#";
            for(var i=0;i<6;i++){
                color += letter[Math.round(Math.random()*15)];
                }
                return color;
        }
        
        var clickedTime; var creadtedTime; var reactionTime; 
        function makebox() {
            
            var time= Math.random();
            time = 4000*time;
            time=Math.floor(time)
            setTimeout(function() {
                if(Math.random()>0.5) {
                    document.getElementById("box").style.borderRadius="100px";
                }else{
                    document.getElementById("box").style.borderRadius="0px";
                }
                
                var top=Math.random();
                top=top*300;
                var left=Math.random();
                left=left*1000;
                document.getElementById("box").style.top=top+"px";
                document.getElementById("box").style.left=left+"px";
                
                document.getElementById("box").style.backgroundColor=getRandomColor();
                document.getElementById("box").style.display="block";
                createdTime=Date.now();
            },time);
            
        }
            
            document.getElementById("box").onclick=function(){
                
                clickedTime=Date.now();
                reactionTime=(clickedTime-createdTime)/1000;
                document.getElementById("time").innerHTML=reactionTime;
                this.style.display="none";
                makebox();
            }
            
        makebox();