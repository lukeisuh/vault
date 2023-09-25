// vault.js
const handleImage = document.querySelector('.handle');
const doorImage = document.querySelector('.door');
const insideImage = document.querySelector('.inside');

let isOpen = false;

handleImage.addEventListener('click', () => {
    if (!isOpen) {
        handleImage.style.transform = 'translateX(350px)';
        doorImage.style.transform = 'translateX(350px)';
        isOpen = true;
    }
});
