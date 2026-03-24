const messages = [
    "I understand...",
    "Take all the time you need",
    "I’ll be here when you’re ready",
    "I really didn’t mean to hurt you",
    "You matter a lot to me",
    "I respect your space",
    "No pressure, I promise",
    "I just hope we can be okay again someday",
    "I’m truly sorry",
    "Whenever you're ready ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

function handleYesClick() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.yes-container').style.display = 'block';
}

// Play background music on first user interaction (works on mobile/desktop)
const music = document.getElementById('bg-music');

document.addEventListener('click', () => {
    if (music.paused) {
        music.play().catch(err => console.log("Music play blocked:", err));
    }
}, { once: true });
