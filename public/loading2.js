var speed = .5;

(function(){
	var x = 0;
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	var settings = {x:50,y:50,radius:50,width:35};
	
	canvas.style.height="200px";
	canvas.style.width="200px";
	document.body.appendChild(canvas);
	settings.x=canvas.width/2;
	settings.y=canvas.height/2;
	settings.width=settings.radius-15;
	
	function load(d,c){
		ctx.beginPath();
		ctx.arc(settings.x, settings.y, settings.radius, x-d, Math.PI/2+x+Math.sin(x), false);
		ctx.strokeStyle = c;
		ctx.lineWidth=settings.width;
	    ctx.stroke();
	    ctx.fillStyle = c;
	}
	
	setInterval(()=>{
		console.log(x);
		
		ctx.fillStyle = "orange";
		ctx.fillRect(0,0,500,500);
		
		load(1.5,"#4f4f4f");
		load(1,"#262626");
		load(0,"#000000");
		
		x+=speed;
	},100);
})();

