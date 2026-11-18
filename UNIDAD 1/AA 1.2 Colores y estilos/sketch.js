function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Cabeza amarilla
  fill(255, 204, 0); 
  stroke(0);
  strokeWeight(3);
  ellipse(200, 200, 200, 200);

  // Ojo izquierdo con borde rojo
  stroke(255, 0, 0);
  fill(255);
  ellipse(160, 180, 40, 40);

  // Ojo derecho sin borde
  noStroke();
  fill(255);
  ellipse(240, 180, 40, 40);

  // Pupilas con transparencia
  fill(0, 0, 255, 120);
  ellipse(160, 180, 20, 20);
  ellipse(240, 180, 20, 20);

  // Boca solo contorno
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(200, 220, 100, 60, 0, PI);
}

