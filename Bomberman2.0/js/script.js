
var jugando;
var mapaSelector = 0;
var puntos_1 = 0;
var puntos_2 = 0;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio(){
	jugando = true;
	miCanvas = $("#mi_canvas")[0];
	contexto = miCanvas.getContext("2d");
	buffer = document.createElement("canvas");

	if (mapaSelector == 0){
		mapa = new Mapa("#mapa_1","#bloque_1");
	} else{
		//pass
	}
	bomberman_1 = new Bomberman1();
	bomberman_2 = new Bomberman2();
	bomba_negro = new Bomba("#sprite1_b2", "#sprite2_b2", "#sprite3_b2", "#sprite4_b2", "#sprite5_b2", "#sprite6_b2", "#sprite7_b2", "#sprite8_b2", "#sprite9_b2", "#bomba_2", "Negro");
	bomba_blanco = new Bomba("#sprite1_b1", "#sprite2_b1", "#sprite3_b1", "#sprite4_b1", "#sprite5_b1", "#sprite6_b1", "#sprite7_b1", "#sprite8_b1", "#sprite9_b1", "#bomba_1", "Blanco");

	mapa.llenarMatriz();

	bomberman_1.matriz = mapa.matriz;
	bomberman_2.matriz = mapa.matriz;
	run();

	//Selector de escenarios
	$('#escenario_1').click(function(){
		mapaSelector += 1;
		mapa = new Mapa("#mapa_1","#bloque_1");
		inicio();
	});

	$('#escenario_2').click(function(){
		mapaSelector += 1;
		mapa = new Mapa("#mapa_2","#bloque_2");
		inicio();
	});

	$('#escenario_3').click(function(){
		mapaSelector += 1;
		mapa = new Mapa("#mapa_3","#bloque_3");
		inicio();
	});

	$('#escenario_4').click(function(){
		mapaSelector += 1;
		mapa = new Mapa("#mapa_4","#bloque_4");
		inicio();
	});

}

function capturaTeclado(event){
	//Tecla arriba
	if(event.which==38)
		bomberman_1.actualizar('arriba');
	//Tecla W
	if (event.which==87)
		bomberman_2.actualizar('arriba');

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
		bomberman_2.actualizar('derecha');

	//Tecla izquieda
	if(event.which==37)
		bomberman_1.actualizar('izquierda');
	//Tecla A
	if (event.which==65)
		bomberman_2.actualizar('izquierda');
	//Tecla P
	if (event.which==80)
		bomba_blanco.dibujar(bomberman_1.i, bomberman_1.j+1);

	//Tecla Espacio
	if (event.which==32)
		bomba_negro.dibujar(bomberman_2.i+1, bomberman_2.j);

}

function run(){
	buffer.width = miCanvas.width;
	buffer.height = miCanvas.height;
	contextoBuffer = buffer.getContext("2d");

	bomberman_1.posicion_bomberman2 = bomberman_2.posicion_bomberman2;
	bomberman_2.posicion_bomberman1 = bomberman_1.posicion_bomberman1;

	if(jugando){
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);

		mapa.dibujar(contextoBuffer);
		bomberman_1.dibujar(contextoBuffer);
		bomberman_2.dibujar(contextoBuffer);
		bomba_blanco.recibeContexto(contextoBuffer);
		bomba_negro.recibeContexto(contextoBuffer);

		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);

		contexto.fillStyle = "#ffffff";
		contexto.font = "30px sans-serif";
		contexto.fillText("Victorias de blanco: "+ puntos_1, 150, 760);
		contexto.fillText("Victorias de negro: "+ puntos_2, 800, 760);

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
