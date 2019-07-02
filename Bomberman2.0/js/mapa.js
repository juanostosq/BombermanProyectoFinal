$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function Mapa(){
  this.x = 0;
  this.y = 0;
  this.img = $("#mapa")[0];

  this.dibujar = function(ctx){
		var img = this.img;
		var x = this.x;
		var y = this.y;
		ctx.drawImage(img, this.x, this.y);
	}

}
