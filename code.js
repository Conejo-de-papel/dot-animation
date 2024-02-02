function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255); // установка белого фона
}

function draw() {
  let r = 150;
  let t = millis() * 0.0005;
  let x = width/2 + r * cos(TWO_PI * t);
  let y = height/2 + r * sin(TWO_PI * t);

  background(255); // очищаем экран на каждом кадре, чтобы не оставлять следы
  fill(0); // устанавливаем черный цвет
  noStroke(); // без обводки
  ellipse(x, y, 20, 20); // рисуем черную точку
}
