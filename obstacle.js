const ObstaclesArray = [];

class Obstacles {
  constructor() {
    this.top = (Math.random() * canvas.height) / 3 + 20;
    this.bottom = (Math.random() * canvas.height) / 3 + 20;
    this.x = canvas.width;
    this.width = 20;
    this.color = "hsl(" + hue + ",100%, 50%)";
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, 0, this.width, this.top);
    ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
  }

  update() {
    this.x -= gameSpeed;
    this.draw();
  }
}

function handleObstacles() {
  if (frame % 100 === 0) {
    ObstaclesArray.unshift(new Obstacles());
  }

  for (let i = 0; i < ObstaclesArray.length; i++) {
    ObstaclesArray[i].update();
  }

  if (ObstaclesArray.length > 20) {
    ObstaclesArray.pop();
  }
}
