function Bomba(sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7, sprite8, sprite9, imagenbomba, bomberman){
	this.sprites = [$(sprite1)[0], $(sprite2)[0], $(sprite3)[0], $(sprite4)[0], $(sprite5)[0], $(sprite6)[0], $(sprite7)[0], $(sprite8)[0], $(sprite9)[0]];
	this.sprite1 = $(sprite1)[0];
	var ctx;

	this.imagen = $(imagenbomba)[0];

	this.dueño = $(bomberman)[0];

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

	this.dibujar = function(posi, posj){
		var bomba_i = 72 + posi*64;
		var bomba_j = 250 + posi*64;
		ctx.drawImage(this.imagen, (bomba_j),(bomba_i));
		/*ctx.save();
		ctx.fillStyle = "#ffffff";
		ctx.font = "12px sans-serif";
		ctx.restore();*/
		setTimeout(this.actualizar,2000);
		setTimeout(this.estallido,222);


	}

	var i = 0;

	this.estallido = function(bomba_j, bomba_i, ctx){
		console.log(ctx);
		if(i<9){
			ctx.drawImage(this.sprite1, bomba_j, bomba_i);
			ctx.drawImage(this.sprite1, bomba_j+1, bomba_i);
			ctx.drawImage(this.sprite1, bomba_j-1, bomba_i);
			ctx.drawImage(this.sprite1, bomba_j, bomba_i+1);
			ctx.drawImage(this.sprite1, bomba_j, bomba_i-1);
			i+1;
		}
	}

	this.actualizar = function(posi, posj, ctx){
		Bomba().dibujar();
	}

	this.recibeContexto = function(contexto){
		ctx = contexto;
	}

}
