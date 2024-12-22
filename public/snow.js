// Snowflake settings
const snowCanvas = document.getElementById("canvas");
const snowCtx = snowCanvas.getContext('2d');

snowCanvas.style.position = 'fixed';
snowCanvas.style.top = 0;
snowCanvas.style.left = 0;
snowCanvas.style.pointerEvents = 'none';
snowCanvas.width = window.innerWidth;
snowCanvas.height = window.innerHeight;

const snowflakes = [];
const snowflakeCount = 100;

// Create snowflakes
function createSnowflakes() {
  for (let i = 0; i < snowflakeCount; i++) {
    snowflakes.push({
      x: Math.random() * snowCanvas.width,
      y: Math.random() * snowCanvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1,
      angle: Math.random() * Math.PI * 2,
    });
  }
}

// Animate snowflakes
function animateSnowflakes() {
  snowCtx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);

  snowflakes.forEach((flake) => {
    flake.y += flake.speed;
    flake.x += Math.sin(flake.angle) * 0.5;

    if (flake.y > snowCanvas.height) {
      flake.y = -flake.radius;
      flake.x = Math.random() * snowCanvas.width;
    }

    snowCtx.beginPath();
    snowCtx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    snowCtx.fillStyle = 'white';
    snowCtx.fill();
  });

  requestAnimationFrame(animateSnowflakes);
}

// Handle window resize
window.addEventListener('resize', () => {
  snowCanvas.width = window.innerWidth;
  snowCanvas.height = window.innerHeight;
});

createSnowflakes();
animateSnowflakes();
