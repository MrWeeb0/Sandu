document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    const img = button.parentNode.querySelector('img');
    button.addEventListener('click', function() {
        // Emoji pop
        const emojiSpan = document.createElement('span');
        emojiSpan.textContent = '🤤';
        emojiSpan.className = 'emoji-pop';
        emojiSpan.style.fontSize = '2rem';
        emojiSpan.style.marginLeft = '10px';
        button.parentNode.appendChild(emojiSpan);

        setTimeout(() => {
            emojiSpan.remove();
        }, 1000);

        if (img) {
            img.classList.remove('img-pop'); 
            void img.offsetWidth; 
            img.classList.add('img-pop');
        }
    });
});