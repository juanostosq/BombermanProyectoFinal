function Mapa(escenario, bloque){
  this.x = 0;
  this.y = 0;

  this.img = $(escenario)[0];
  this.bloques = $(bloque)[0];

  this.cuadros = Math.round(Math.random()*10);

  this.aux = 0;

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

  this.llenarMatriz = function(){
			for (var i = 0; i < 9; i++) {
				for (var j = 0; j < 15; j++){
          //Numero de cuadros a pintar
          if (this.aux < 15){
            this.ran = Math.round(Math.random()*7);
            if (this.ran == 1){
              this.matriz[i][j] = 1;
              this.aux += 1;
            }else {
              this.matriz[i][j] = 0;
            }
          }else{
            this.matriz[i][j] = 0;
          }
				}
			}

      if (this.matriz[0][0] == 1){
        this.matriz[0][0] = 0;
      }

      if (this.matriz[8][14] == 1){
        this.matriz[8][14] = 0;
      }

		}

  this.dibujar = function(ctx){
		var img = this.img;
		var x = this.x;
		var y = this.y;
		ctx.drawImage(img, this.x, this.y);

    for (var k = 0; k < this.cuadros; k++){
			for (var i = 0; i < 9; i++) {
				for (var j = 0; j < 15; j++){
					if (this.matriz[i][j]==1){
						ctx.drawImage(this.bloques, (250 + j*64),(72 + i*64));
					}else{
            //pass
					}
				}
			}
		}

	}

}
