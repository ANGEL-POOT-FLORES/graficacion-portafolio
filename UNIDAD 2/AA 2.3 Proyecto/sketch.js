let fpsObjetivo = 60; 
let fpsBase = 20;
let velocidadAnimacion = 1;

let planets = [];
let stars = [];
let meteoritos = [];
let sunPulse = 0;

const CANTIDAD_METEORITOS = 18;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fpsObjetivo);
  angleMode(RADIANS);
  noStroke();

  // Crear estrellas
  for (let i = 0; i < 350; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(0.5, 2.5),
      alpha: random(80, 255),
      speed: random(0.5, 2.5),
      phase: random(TWO_PI)
    });
  }

  let data = [
    {
      name: "Mercurio", r: 4, orbit: 48,
      color: "#aaa9a5", speed: 0.020,
      moons: []
    },
    {
      name: "Venus", r: 7, orbit: 72,
      color: "#e8b878", speed: 0.014,
      moons: []
    },
    {
      name: "Tierra", r: 8, orbit: 101,
      color: "#3295ff", speed: 0.010,
      moons: [
        { name: "Luna", r: 2.5, orbit: 15, speed: 0.06 }
      ]
    },
    {
      name: "Marte", r: 6, orbit: 132,
      color: "#e45b42", speed: 0.008,
      moons: [
        { name: "Fobos", r: 1.5, orbit: 10, speed: 0.08 },
        { name: "Deimos", r: 1.3, orbit: 15, speed: -0.035 }
      ]
    },
    {
      name: "Júpiter", r: 20, orbit: 180,
      color: "#d6ad86", speed: 0.004,
      moons: [
        { name: "Ío", r: 2.5, orbit: 27, speed: 0.035 },
        { name: "Europa", r: 2.3, orbit: 34, speed: 0.025 },
        { name: "Ganímedes", r: 3, orbit: 42, speed: 0.018 },
        { name: "Calisto", r: 2.8, orbit: 50, speed: 0.012 }
      ]
    },
    {
      name: "Saturno", r: 16, orbit: 235,
      color: "#e5cf91", speed: 0.003,
      rings: true,
      moons: [
        { name: "Titán", r: 3, orbit: 25, speed: 0.025 },
        { name: "Rea", r: 2, orbit: 33, speed: 0.020 },
        { name: "Encélado", r: 1.5, orbit: 39, speed: 0.030 },
        { name: "Jápeto", r: 2, orbit: 47, speed: 0.012 }
      ]
    },
    {
      name: "Urano", r: 11, orbit: 280,
      color: "#8ce5e8", speed: 0.002,
      rings: true,
      moons: [
        { name: "Titania", r: 2, orbit: 19, speed: 0.025 },
        { name: "Oberón", r: 2, orbit: 25, speed: 0.018 },
        { name: "Ariel", r: 1.5, orbit: 31, speed: 0.030 },
        { name: "Umbriel", r: 1.5, orbit: 36, speed: 0.022 },
        { name: "Miranda", r: 1.3, orbit: 41, speed: 0.035 }
      ]
    },
    {
      name: "Neptuno", r: 10, orbit: 320,
      color: "#426dff", speed: 0.0015,
      moons: [
        { name: "Tritón", r: 2.5, orbit: 19, speed: -0.025 },
        { name: "Nereida", r: 1.5, orbit: 27, speed: 0.018 },
        { name: "Proteo", r: 1.5, orbit: 34, speed: 0.022 }
      ]
    }
  ];

  for (let p of data) {
    planets.push({
      ...p,
      angle: random(TWO_PI),
      spin: random(TWO_PI),
      moonAngles: p.moons.map(() => random(TWO_PI))
    });
  }

  for (let i = 0; i < CANTIDAD_METEORITOS; i++) {
    meteoritos.push(crearMeteorito());
  }
}

function draw() {
  background(3, 5, 20);

  velocidadAnimacion = fpsObjetivo / fpsBase;

  drawStars();

  drawMeteoritos();

  let cx = width / 2;
  let cy = height / 2;

  push();
  translate(cx, cy);

  drawSun();

  noFill();
  stroke(100, 130, 180, 55);
  strokeWeight(1);

  for (let p of planets) {
    ellipse(0, 0, p.orbit * 2, p.orbit * 2);
  }

  for (let p of planets) {
    p.angle += p.speed * velocidadAnimacion;
    p.spin += 0.01 * velocidadAnimacion;

    let px = cos(p.angle) * p.orbit;
    let py = sin(p.angle) * p.orbit;

    push();
    translate(px, py);

    noFill();
    stroke(180, 200, 230, 55);
    strokeWeight(0.6);

    for (let moon of p.moons) {
      ellipse(0, 0, moon.orbit * 2, moon.orbit * 2);
    }

    if (p.rings) {
      push();
      rotate(-0.35);
      noFill();

      if (p.name === "Saturno") {
        stroke(230, 205, 150, 210);
        strokeWeight(5);
        ellipse(0, 0, p.r * 3.1, p.r * 1.25);

        stroke(245, 225, 180, 180);
        strokeWeight(1.5);
        ellipse(0, 0, p.r * 3.5, p.r * 1.45);
      } else {
        stroke(160, 230, 235, 160);
        strokeWeight(2);
        ellipse(0, 0, p.r * 3.1, p.r * 1.25);
      }

      pop();
    }

    noStroke();
    fill(
      red(color(p.color)),
      green(color(p.color)),
      blue(color(p.color)),
      35
    );
    circle(0, 0, p.r * 2.8);

    fill(p.color);
    circle(0, 0, p.r * 2);

    fill(255, 255, 255, 75);
    ellipse(-p.r * 0.3, -p.r * 0.3, p.r * 0.7, p.r * 0.5);

    // Lunas
    for (let i = 0; i < p.moons.length; i++) {
      let moon = p.moons[i];

      p.moonAngles[i] += moon.speed * velocidadAnimacion;

      let mx = cos(p.moonAngles[i]) * moon.orbit;
      let my = sin(p.moonAngles[i]) * moon.orbit;

      noStroke();
      fill(190, 200, 220);
      circle(mx, my, moon.r * 2);
    }

    noStroke();
    fill(225, 230, 245);
    textAlign(CENTER);
    textSize(10);
    text(p.name, 0, p.r + 17);

    pop();
  }

  pop();

  drawInterface();
}

function crearMeteorito(ladoForzado) {
  let cx = width / 2;

  let limiteInterior = min(350, width * 0.40);

  let lado = ladoForzado !== undefined
    ? ladoForzado
    : (random() < 0.5 ? -1 : 1);

  let x;

  if (lado === -1) {
    x = random(5, max(6, cx - limiteInterior));
  } else {
    x = random(
      min(width - 5, cx + limiteInterior),
      max(min(width - 4, cx + limiteInterior), width - 5)
    );
  }
  let y = random(90, max(91, height - 100));

  return {
    x: x,
    y: y,
    lado: lado,
    tamano: random(1, 2.3),
    velocidadX: random(-0.35, 0.35),
    velocidadY: random(-1.5, 1.5),
    brillo: random(130, 255),
    largo: random(5, 13)
  };
}

function drawMeteoritos() {
  // Evitar meteoritos en pantallas pequeñas
  if (width < 760 || height < 200) return;

  let cx = width / 2;
  let limiteInterior = min(350, width * 0.40);

  for (let m of meteoritos) {
    // Movimiento
    m.x += m.velocidadX * velocidadAnimacion;
    m.y += m.velocidadY * velocidadAnimacion;

    let limiteIzquierdo = cx - limiteInterior;
    let limiteDerecho = cx + limiteInterior;

    let salio =
      m.y < 85 ||
      m.y > height - 95 ||
      m.x < 3 ||
      m.x > width - 3 ||
      (m.lado === -1 && m.x > limiteIzquierdo) ||
      (m.lado === 1 && m.x < limiteDerecho);

    if (salio) {
      let nuevo = crearMeteorito(m.lado);

      m.x = nuevo.x;
      m.y = nuevo.y;
      m.tamano = nuevo.tamano;
      m.velocidadX = nuevo.velocidadX;
      m.velocidadY = nuevo.velocidadY;
      m.brillo = nuevo.brillo;
      m.largo = nuevo.largo;
    }

    let colaX = m.x - m.velocidadX * m.largo * 2;
    let colaY = m.y - m.velocidadY * m.largo * 2;

    stroke(170, 200, 255, m.brillo * 0.55);
    strokeWeight(m.tamano * 0.7);
    line(colaX, colaY, m.x, m.y);

    // Cabeza brillante
    noStroke();
    fill(220, 235, 255, m.brillo);
    circle(m.x, m.y, m.tamano * 2);

    fill(180, 210, 255, m.brillo * 0.25);
    circle(m.x, m.y, m.tamano * 4);
  }

  noStroke();
}

function drawStars() {
  noStroke();

  for (let s of stars) {
    let a = map(
      sin(
        frameCount * 0.025 *
        s.speed * velocidadAnimacion + s.phase
      ),
      -1, 1, 25, s.alpha
    );

    fill(210, 225, 255, a);
    circle(s.x, s.y, s.size);

    if (random() < 0.003 * velocidadAnimacion) {
      s.phase = random(TWO_PI);
    }
  }
}

function drawSun() {
  sunPulse += 0.025 * velocidadAnimacion;

  let pulse = sin(sunPulse) * 3;

  // Halo del Sol
  noStroke();
  fill(255, 110, 15, 15);
  circle(0, 0, 75 + pulse);

  fill(255, 150, 25, 30);
  circle(0, 0, 58 + pulse);

  // Cuerpo solar
  fill(255, 170, 35);
  circle(0, 0, 34 + pulse * 0.3);

  fill(255, 225, 100);
  circle(0, 0, 24 + pulse * 0.2);

  fill(255, 250, 205);
  circle(-5, -5, 12);
}

function drawInterface() {
  push();
  noStroke();

  fill(230, 235, 255);
  textAlign(LEFT);
  textSize(16);
  text("SISTEMA SOLAR", 18, 28);

  fill(150, 170, 210);
  textSize(11);
  text("Planetas y lunas en movimiento", 18, 46);
  text("FPS configurados: " + fpsObjetivo, 18, 63);

  pop();

  // Datos del alumno
  push();
  noStroke();
  fill(230, 235, 255);
  textAlign(CENTER);
  textSize(16);
  text(
    "Ingeniería en Sistemas Computacionales - 3er Semestre",
    windowWidth - 250,
    windowHeight - 50
  );

  fill(150, 170, 210);
  textSize(11);
  text(
    "Materia: Graficación",
    windowWidth - 250,
    windowHeight - 40
  );
  text(
    "Alumno: Angel Poot Flores",
    windowWidth - 250,
    windowHeight - 30
  );
  text(
    "Maestra: MTI. Paloma Gongora Sabido",
    windowWidth - 250,
    windowHeight - 20
  );

  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Reubicar estrellas
  for (let s of stars) {
    s.x = random(width);
    s.y = random(height);
  }

  meteoritos = [];

  for (let i = 0; i < CANTIDAD_METEORITOS; i++) {
    meteoritos.push(crearMeteorito());
  }
}

