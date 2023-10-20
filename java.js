
// JavaScript code
const menuToggle = document.getElementById('tbot');
const slidingMenu = document.querySelector('.sliding-menu');
const buttons = document.querySelectorAll('.menu-button');

document.addEventListener('click', (event) => {
    if (!slidingMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        slidingMenu.classList.remove('open');
        resetButtonStyles();
    }
});

menuToggle.addEventListener('click', () => {
    slidingMenu.classList.toggle('open');

    if (slidingMenu.classList.contains('open')) {
        resetButtonStyles();
        buttons.forEach((button, index) => {
            setTimeout(() => {
                button.style.transform = 'translateY(0)';
                button.style.opacity = '1';
            }, 200 + index * 200); // Adjust the delay timing as needed
        });
    } else {
        resetButtonStyles();
    }
});

function resetButtonStyles() {
    buttons.forEach((button) => {
        button.style.transform = 'translateY(-10px)';
        button.style.opacity = '0';
    });
}
