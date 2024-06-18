const particleCount = 20;
const particlesContainer = document.querySelector('.particles');

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.width = `${Math.random() * 10 + 5}px`;
  particle.style.height = particle.style.width;
  particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
  particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
  particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
  particlesContainer.appendChild(particle);
}