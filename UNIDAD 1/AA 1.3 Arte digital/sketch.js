function setup() {
  createCanvas(800, 600);
}

function draw() {
  // Cielo
  background(20, 40, 100);

  // Luna
  fill(255, 220, 80);
  noStroke();
  ellipse(680, 100, 70, 70);//Modifica el sol o el punto mas grande 

  // Estrellas adicionales
  fill(255, 220, 80);

  // Estrellas grandes (como las más brillantes en la pintura)
  ellipse(100, 80, 40, 40);   // arriba izquierda
  ellipse(300, 60, 35, 35);   // centro superior
  ellipse(500, 100, 40, 40);  // arriba derecha

  // Estrellas medianas
  ellipse(200, 150, 25, 25);
  ellipse(400, 180, 30, 30);
  ellipse(600, 160, 25, 25);

  // Estrellas pequeñas dispersas
  ellipse(150, 90, 15, 15);
  ellipse(350, 130, 18, 18);
  ellipse(700, 120, 20, 20);
  ellipse(650, 200, 15, 15);
  ellipse(250, 200, 18, 18);

  // Remolinos del cielo
  noFill();
  stroke(70, 130, 220);
  strokeWeight(8);

  arc(200, 180, 250, 100, 0, PI);
  arc(350, 180, 300, 120, PI, TWO_PI);
  arc(500, 220, 300, 130, 0, PI);

  // Montañas con inclinación
  noStroke();
  fill(30, 60, 80);

  // Montaña izquierda
  triangle(0, 450, 350, 350, 420, 450);

  // Montaña central
  triangle(150, 450, 550, 320, 700, 450);

  // Montaña derecha
  triangle(400, 450, 750, 330, 800, 450);

  // Pueblo
  fill(30, 35, 55);
  rect(0, 450, 800, 150);

  // Casas reposicionadas
  fill(40, 40, 60);
  rect(120, 420, 60, 70);   // Casa 1
  rect(220, 440, 60, 50);   // Casa 2
  rect(340, 410, 60, 80);   // Casa 3
  rect(490, 430, 60, 60);   // Casa 4
  rect(620, 415, 60, 75);   // Casa 5

  // Ventanas ajustadas
  fill(255, 200, 70);
  rect(140, 440, 15, 15);   // Ventana 1
  rect(240, 455, 15, 15);   // Ventana 2
  rect(360, 430, 15, 15);   // Ventana 3
  rect(510, 445, 15, 15);   // Ventana 4
  rect(640, 435, 15, 15);   // Ventana 5

  // Iglesia
  fill(35, 35, 55);
  rect(385, 370, 40, 120);  // torre
  triangle(375, 370, 405, 330, 435, 370); // techo


  //Modifca el color del arbol
  fill(10, 30, 30);

  triangle(
    80, 600,
    140, 10,
    200, 600
  );

  // Modifca las lineas del arbol 
  stroke(30, 70, 60);
  strokeWeight(5);

  line(120, 500, 150, 450);
  line(110, 550, 155, 480);
  line(130, 400, 155, 350);
}
