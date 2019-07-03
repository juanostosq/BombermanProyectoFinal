
var jugando;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio(){
	jugando = true;
	miCanvas = $("#mi_canvas")[0];
	contexto = miCanvas.getContext("2d");
	buffer = document.createElement("canvas");

	mapa = new Mapa("#mapa_1","#bloque_1");
	bomberman_1 = new Bomberman1();
	bomberman_2 = new Bomberman2();

	mapa.llenarMatriz();

	bomberman_1.matriz = mapa.matriz;
	bomberman_2.matriz = mapa.matriz;



	run();
}

function capturaTeclado(event){
	//Tecla arriba
	if(event.which==38)
		bomberman_1.actualizar('arriba');
	//Tecla W
	if (event.which==87)
		bomberman_2.actualizar('arriba')

	//Tecla abajo
	if(event.which==40)
		bomberman_1.actualizar('abajo');
	//Tecla S
	if(event.which==83)
		bomberman_2.actualizar('abajo');

	//Tecla derecha
	if(event.which==39)
		bomberman_1.actualizar('derecha');
	//Tecla D
	if(event.which==68)
		bomberman_2.actualizar('derecha')

	//Tecla izquieda
	if(event.which==37)
		bomberman_1.actualizar('izquierda');
	//Tecla A
	if (event.which==65)
		bomberman_2.actualizar('izquierda')

}

function run(){
	buffer.width = miCanvas.width;
	buffer.height = miCanvas.height;
	contextoBuffer = buffer.getContext("2d");

	if(jugando){
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);

		mapa.dibujar(contextoBuffer);
		bomberman_1.dibujar(contextoBuffer);
		bomberman_2.dibujar(contextoBuffer);

		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);

		setTimeout("run()",20);

	}else{
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);
		contextoBuffer.fillStyle = "#ffffff";
		gallina.sprite = 3;
		gallina.vida = 0;
		gallina.dibujar(contextoBuffer);
		contextoBuffer.font = "50px sans-serif";
		contextoBuffer.fillText("GAMEOVER", 300, 440);
		contextoBuffer.fillStyle = "#ff0000";
		contextoBuffer.font = "15px sans-serif";
		contextoBuffer.fillText("try again", 550, 460);
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
	}

}
