var speed = .5;

function createLoading(){
	var x = 0;
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	var settings = {x:100,y:50,radius:30};
	
	canvas.style.height="150px";
	canvas.style.width="150px";
	document.body.appendChild(canvas);
	
	function load(){
		ctx.beginPath();
		ctx.arc(settings.x, settings.y, settings.radius, x, Math.PI/2+x+Math.sin(x), false);
		ctx.strokeStyle = "blue";
		ctx.lineWidth=25;
	  ctx.stroke();
	  ctx.fillStyle = "blue";
	}
	
	setInterval(()=>{
		
		ctx.fillStyle = "black";
		ctx.fillRect(0,0,500,500);
		
		load();
		
		x+=speed;
	},100);
}

