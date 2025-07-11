const burung = new Image();
burung.src = "image/flappybird.gif";

class Bird {
  // Gunakan PascalCase untuk nama class
  constructor() {
    this.x = 150;
    this.y = 200;
    this.vy = 0;
    this.originwidth = 735;
    this.originheight = 275;
    this.width = this.originwidth / 20;
    this.height = this.originheight / 20;
    this.weight = 1;
  }

  update() {
    let curve = Math.sin(angle);
    if (this.y > canvas.height - this.height * 3) {
      this.y = canvas.height - this.height * 3;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.vy *= 0.9;
      this.y += this.vy;
    }

    if (this.y < 0 + this.height) {
      this.y = 0 + this.height;
      this.vy = 0;
    }

    if (spacePressed) this.flap();
  }

  draw() {
    ctx.fillStyle = "red";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      burung,
      0,
      0,
      this.originwidth,
      this.originheight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  flap() {
    this.vy -= 2;
  }
}

const bird = new Bird(); // Sekarang konsisten (Bird dengan huruf besar)
