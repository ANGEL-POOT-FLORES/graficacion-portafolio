function setup() {
  createCanvas(800, 600);

  background('DarkGray');

}

function draw() {
  fill('Yellow');
  triangle(380, 160, 400, 120, 420, 160);//sombrero 

  fill('White');
  circle(400,180,40);//cabesa

  fill('black');
  rect(380,200,40);//cuerpo
  
  line(380,210,360,200)//Mano Izquierda
  line(380,280,390,240)//Pie izquierdo
  
  line(420,210,440,200)//Mano derecha
  line(420,280,405,240)//Pie derecha 
  
  
  
  fill('Yellow');
  triangle(480, 160, 500, 120, 520, 160);//sombrero 
  
  fill('White');
  circle(500,180,40);//cabesa

  fill('DimGray');
  rect(480,200,40);//cuerpo
  
  line(480,210,460,200)//Mano Izquierda
  line(480,280,490,240)//Pie izquierdo
  
  line(520,210,540,200)//Mano derecha
  line(520,280,505,240)//Pie derecha 
  
}
