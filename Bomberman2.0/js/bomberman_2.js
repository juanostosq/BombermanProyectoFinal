function Bomberman2(){
	this.x = 1155;
	this.y = 585;
	this.img = [$("#izquierda_2")[0],$("#derecha_2")[0], $("#arriba_2")[0], $("#abajo_2")[0]];
	this.sprite = 0;

	//i: fila, j: columna
	this.i = 8;
	this.j = 14;

	this.i_bomberman1 = 0;
	this.j_bomberman1 = 0;

	this.matriz = [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	];

	this.posicion_bomberman1 = [
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	];

	this.posicion_bomberman2 = [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
	];

	this.dibujar = function(ctx){
		var img = this.img[this.sprite];
		var x = this.x;
		var y = this.y;
		ctx.drawImage(img, x, y);
		ctx.save();
		ctx.fillStyle = "#ffffff";
		ctx.font = "12px sans-serif";
		ctx.restore();
	}

	this.actualizar = function(accion){
		if(accion=="arriba" && this.y > 75 && this.matriz[this.i-1][this.j]!=1 && this.posicion_bomberman1[this.i-1][this.j]==0){

			this.posicion_bomberman2[this.i][this.j]=0;

			this.i -= 1;
			this.y -= 65;

			this.posicion_bomberman2[this.i][this.j] = 1;

			this.sprite = 2;
			this.vida = this.i;
			this.puntos = this.j;
		}

		if(accion=="abajo"  && this.y < 560 && this.matriz[this.i+1][this.j]==0 && this.posicion_bomberman1[this.i+1][this.j]==0){

			this.posicion_bomberman2[this.i][this.j]=0;

			this.i += 1;
			this.y += 65;

			this.posicion_bomberman2[this.i][this.j] = 1;

			this.sprite = 3;
			this.vida = this.i;
			this.puntos = this.j;
		}

		if(accion=="izquierda" && this.x >= 245 && this.matriz[this.i][this.j-1]==0 && this.posicion_bomberman1[this.i][this.j-1]==0){

			this.posicion_bomberman2[this.i][this.j]=0;

			this.j -= 1;
			this.x -= 65;

			this.posicion_bomberman2[this.i][this.j] = 1;

			this.sprite = 0;
			this.vida = this.i;
			this.puntos = this.j;
		}

		if(accion=="derecha" && this.x <= 1130 && this.matriz[this.i][this.j+1]==0 && this.posicion_bomberman1[this.i][this.j+1]==0){

			this.posicion_bomberman2[this.i][this.j]=0;

			this.j += 1;
			this.x += 65;

			this.posicion_bomberman2[this.i][this.j] = 1;

			this.sprite = 1;
			this.vida = this.i;
			this.puntos = this.j;
		}
	}

}
