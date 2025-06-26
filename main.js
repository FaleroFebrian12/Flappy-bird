const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

// dekralasikan variabel yang dibutuhkan

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;

// membuat function yang akan memanggil semua function
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillRect(10, canvas.height - 90, 50, 50);
  handleObstacles();
  bird.update();
  bird.draw();
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
