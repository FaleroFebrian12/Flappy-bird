const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 400;

// dekralasikan variabel yang dibutuhkan

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;

// background
const background1 = new Image();
background1.src = "image/bg.jpg";

const background2 = new Image();
background2.src = "image/bg.jpg";

const BG = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

function handleBackground() {
  if (BG.x1 <= -BG.width + gameSpeed) BG.x1 = BG.width;
  else BG.x1 -= gameSpeed;
  if (BG.x1 <= -BG.width + gameSpeed) BG.x2 = BG.width;
  else BG.x2 -= gameSpeed;

  ctx.drawImage(background1, BG.x1, BG.y, BG.width, BG.height);
  ctx.drawImage(background2, BG.x2, BG.y, BG.width, BG.height);
}
// membuat function yang akan memanggil semua function
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillRect(10, canvas.height - 90, 50, 50);
  handleBackground();
  handleObstacles();
  bird.update();
  bird.draw();
  ctx.fillStyle = "blue";
  ctx.font = "90px Georgia";
  ctx.strokeText(score, 450, 70);
  ctx.fillText(score, 450, 70);
  handlecollision();
  if (handlecollision()) return;
  requestAnimationFrame(animate);
  frame++;
}

animate();

window.addEventListener("keydown", function (e) {
  if (e.code === "Space") spacePressed = true;
});

window.addEventListener("keyup", function (e) {
  if (e.code === "Space") spacePressed = false;
});

// event klik sembarang
window.addEventListener("mousedown", (e) => {
  e.preventDefault();
  spacePressed = true;
});

window.addEventListener("mouseup", (e) => {
  spacePressed = false;
});

window.addEventListener("touchstart", (e) => {
  e.preventDefault();
  spacePressed = true;
});

window.addEventListener("touchend", (e) => {
  e.preventDefault();
  spacePressed = false;
});

const duar = new Image();
duar.src = "image/—Pngtree—game end game over_655563.png";

function handlecollision() {
  for (let i = 0; i < ObstaclesArray.length; i++) {
    if (
      bird.x < ObstaclesArray[i].x + ObstaclesArray[i].width &&
      bird.x + bird.width > ObstaclesArray[i].x &&
      ((bird.y < 0 + ObstaclesArray[i].top && bird.y + bird.height > 0) ||
        (bird.y > canvas.height - ObstaclesArray[i].bottom &&
          bird.y + bird.height < canvas.height))
    ) {
      // collision detected
      ctx.drawImage(duar, bird.x, bird.y, 50, 50);
      ctx.font = "25px georgia";
      ctx.fillStyle = "black";

      // Panggil hadiah() dan dapatkan pesannya
      const pesanHadiah =
        score > 100
          ? `Selamat ${nama}, Anda mendapatkan hadiah ucapan trimakasih, awokawok :) Skor: ${score}`
          : `mohon maaf ${nama} skor anda dibawah 100 yaitu adalah: ${score}`;

      ctx.fillText(pesanHadiah, 160, canvas.height / 2 - 10);
      return true;
    }
  }
}

let nama = prompt("Sebutkan nama Anda terlebih dahulu");
