const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the initial canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Create 50 particles with random x, y, and velocity values
for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() * 10 - 5,
    vy: Math.random() * 10 - 5,
    size: Math.random() * 10 + 5,
    color: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`
  });
}

// Animate the particles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    // Update the position of each particle based on its velocity
    particles[i].x += particles[i].vx;
    particles[i].y += particles[i].vy;

    // Reverse the velocity if the particle hits a wall
    if (particles[i].x + particles[i].size > canvas.width || particles[i].x - particles[i].size < 0) {
      particles[i].vx *= -1;
    }

    if (particles[i].y + particles[i].size > canvas.height || particles[i].y - particles[i].size < 0) {
      particles[i].vy *= -1;
    }

    // Draw each particle as a circle
    ctx.beginPath();
    ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
    ctx.fillStyle = particles[i].color;
    ctx.fill();
  }

  // Call the animate function again on the next frame
  requestAnimationFrame(animate);
}

animate();

// Update the canvas size when the window is resized
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

