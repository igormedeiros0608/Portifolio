// script.js
const cube = document.querySelector('.cube');
let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0;

document.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    currentX += deltaY * 0.5;
    currentY += deltaX * 0.5;

    cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

    startX = e.clientX;
    startY = e.clientY;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;

    currentX += deltaY * 0.5;
    currentY += deltaX * 0.5;

    cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', () => {
    isDragging = false;
});
