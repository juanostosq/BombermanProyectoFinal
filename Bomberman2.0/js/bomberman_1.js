function Bomberman1(){
	this.x = 245;
	this.y = 65;
	this.img = [$("#izquierda_1")[0],$("#derecha_1")[0], $("#arriba_1")[0], $("#abajo_1")[0]];
	this.sprite = 1;

	//i = fila, j = columna
	this.i = 0;
	this.j = 0;

	this.i_bomberman2 = 8;
	this.j_bomberman2 = 14;

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
		ctx.restore();
	}

	this.actualizar = function(accion){
		if(accion=="arriba" && this.y > 75 && this.matriz[this.i-1][this.j]!=1 && this.posicion_bomberman2[this.i-1][this.j]==0){

			this.posicion_bomberman1[this.i][this.j]=0;

			this.i -= 1;
			this.y -= 65;

			this.posicion_bomberman1[this.i][this.j]=1;

			this.sprite = 2;
			this.vida = this.i;
			this.puntos = this.j;
		}

		if(accion=="abajo"  && this.y < 560 && this.matriz[this.i+1][this.j]==0 && this.posicion_bomberman2[this.i+1][this.j]==0){
			//console.log("i:" + this.i  +", j:" + this.j );
			//console.log(this.posicion_bomberman1[this.i][this.j])

			this.posicion_bomberman1[this.i][this.j]=0;

			this.i += 1;
			this.y += 65;

			this.posicion_bomberman1[this.i][this.j] = 1;

			this.sprite = 3;
			this.vida = this.i;
			this.puntos = this.j;
		}

		if(accion=="izquierda" && this.x >= 245 && this.matriz[this.i][this.j-1]==0 && this.posicion_bomberman2[this.i][this.j-1]==0 ){

			this.posicion_bomberman1[this.i][this.j]=0;

			this.j -= 1;
			this.x -= 65;

			this.posicion_bomberman1[this.i][this.j]=1;

			this.sprite = 0;
			this.vida = this.i;
			this.puntos = this.j;
		}

		if(accion=="derecha" && this.x <= 1130 && this.matriz[this.i][this.j+1]==0 && this.posicion_bomberman2[this.i][this.j+1]==0){

			this.posicion_bomberman1[this.i][this.j]=0;

			this.j += 1;
			this.x += 65;

			this.posicion_bomberman1[this.i][this.j]=1;

			this.sprite = 1;
			this.vida = this.i;
			this.puntos = this.j;
		}
	}

}
