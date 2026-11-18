function setup() {
  createCanvas(650, 350);
}

function draw() {
  background(240);

  // NIDO DEL HUEVO 1
  push();
  translate(50, 195);

  // Óvalo base del nido
  fill(180, 130, 70);
  stroke(120, 80, 40);
  strokeWeight(3);
  ellipse(0, 0, 80, 35);

  // Líneas del nido
  stroke(120, 80, 40);
  strokeWeight(3);
  line(-35, -8, 30, 8);
  line(-40, 0, 35, -5);
  line(-30, 8, 30, 0);
  line(-25, -12, 40, 5);
  line(-40, 5, 20, 12);
  pop();


  // HUEVO 1
  push();
  translate(50, 160);
  rotate(-0.12);

  fill(255);
  stroke(180);
  strokeWeight(2);
  ellipse(0, 0, 48, 66);

  pop();


  // NIDO DEL PINGÜINO 1
  push();
  translate(160, 195);

  // Óvalo del nido
  fill(180, 130, 70);
  stroke(120, 80, 40);
  strokeWeight(3);
  ellipse(0, 0, 95, 38);

  // Líneas que forman el nido
  stroke(120, 80, 40);
  strokeWeight(3);

  line(-43, -8, 35, 7);
  line(-45, 0, 42, -5);
  line(-35, 8, 35, 0);
  line(-30, -13, 40, 5);
  line(-42, 5, 25, 13);
  line(-20, -15, 30, 10);

  pop();


  // PINGÜINO BEBÉ 2
  push();
  translate(160, 160);
  rotate(0.1);

  // Cabeza
  fill(80);
  noStroke();
  ellipse(0, 0, 65, 65);

  // Cara blanca
  fill(255);
  ellipse(0, 9, 48, 42);

  // Ojo izquierdo
  fill(0);
  ellipse(-12, 0, 10, 12);

  // Ojo derecho
  ellipse(12, 0, 10, 12);

  // Brillo en los ojos
  fill(255);
  ellipse(-10, -2, 3.5, 3.5);
  ellipse(14, -2, 3.5, 3.5);

  // Pico
  fill(255, 140, 0);
  triangle(-7, 14, 7, 14, 0, 26);

  pop();

  // PINGUINO 3

  push();
  translate(290, 155);
  rotate(-0.08);

  // Cabeza negra
  fill(40);
  noStroke();
  ellipse(0, 0, 88, 88);

  // Cara blanca
  fill(255);
  ellipse(0, 12, 64, 56);

  // Ojos
  fill(0);
  ellipse(-16, 0, 14, 16);
  ellipse(16, 0, 14, 16);

  // Brillo
  fill(255);
  ellipse(-13, -3, 5, 5);
  ellipse(19, -3, 5, 5);

  // Pico
  fill(255, 100, 0);
  triangle(-11, 18, 11, 18, 0, 35);

  pop();

  // PINGUINO 4
  push();
  translate(410, 155);
  rotate(0.11);

  // Cabeza
  fill(20);
  noStroke();
  ellipse(0, 0, 88, 88);

  // Parte inferior
  fill(255, 199, 102);
  ellipse(0, 25, 68, 47);

  // Cara blanca
  fill(255);
  ellipse(0, 7, 56, 47);

  // Ojos
  fill(0);
  ellipse(-16, -2, 14, 16);
  ellipse(16, -2, 14, 16);

  // Brillo
  fill(255);
  ellipse(-13, -5, 5, 5);
  ellipse(19, -5, 5, 5);

  // Pico
  fill(255, 120, 0);
  triangle(-11, 18, 11, 18, 0, 35);

  pop();


  // PINGUINO 5
  push();
  translate(560, 155);
  rotate(-0.09);

  // Cabeza
  fill(10);
  noStroke();
  ellipse(0, 0, 88, 88);

  // Parte inferior
  fill(255, 162, 0);
  ellipse(0, 25, 68, 47);

  // Cara blanca
  fill(255);
  ellipse(0, 7, 56, 47);

  // Ojos
  fill(0);
  ellipse(-16, -2, 14, 16);
  ellipse(16, -2, 14, 16);

  // Brillo
  fill(255);
  ellipse(-13, -5, 5, 5);
  ellipse(19, -5, 5, 5);

  // Pico
  fill(255, 120, 0);
  triangle(-11, 18, 11, 18, 0, 35);

  // Huevo de pingüino 5
  fill(255);
  stroke(180);
  strokeWeight(2);
  ellipse(0, 72, 64, 38);

  pop();
}
