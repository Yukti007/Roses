
// Initialize DOM elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bouquet = document.querySelector('.bouquet');
const message = document.querySelector('.message');

// Create flower elements
function createFlower(color = '', index) {
    const flower = document.createElement('div');
    flower.className = `rose ${color}`;
    flower.innerHTML = `
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="petal"></div>
        <div class="leaf">
            <div class="stem"></div>
            <div class="leafs"></div>
            <div class="leafs"></div>
        </div>
    `;
    
    // Position flowers in circular arrangement
    const angle = (index * 36) * (Math.PI / 180); // 36 degree increments
    const radius = 150 + (index % 3) * 30; // Varying radii
    flower.style.left = 250 + Math.cos(angle) * radius - 60 + 'px';
    flower.style.top = 250 + Math.sin(angle) * radius - 60 + 'px';
    flower.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    return flower;
}

// Generate 20 flowers with different colors
const colors = ['yellow-rose', 'white-rose', 'orange-rose', ''];
for (let i = 0; i < 20; i++) {
    const color = colors[i % 4]; // Cycle through color options
    bouquet.appendChild(createFlower(color, i));
}

// No button interaction
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const btnRect = noBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const distance = Math.sqrt(Math.pow(mouseX - btnCenterX, 2) + Math.pow(mouseY - btnCenterY, 2));
    if (distance < 300) {
        const angle = Math.atan2(btnCenterY - mouseY, btnCenterX - mouseX);
        noBtn.style.transform = `translate(${Math.cos(angle) * 200}px, ${Math.sin(angle) * 100}px)`;
    }
});

// Yes button interaction
yesBtn.addEventListener('click', () => {
    bouquet.style.display = 'block';
    message.style.display = 'block';
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('h1').textContent = 'I love you, Abhishek!!';
    // Add additional animations
    document.querySelectorAll('.rose').forEach(rose => {
        rose.style.animation = 'yidon 3s infinite ease-in-out';
    });
});