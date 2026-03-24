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

// Play background music on first click (mobile compatible)
const music = document.getElementById('bg-music');
document.addEventListener('click', () => {
  if (music.paused) music.play().catch(e => console.log(e));
}, { once: true });

// Create floating emojis
const numEmojis = 25; // number of floating emojis
for (let i = 0; i < numEmojis; i++) {
    const emoji = document.createElement('div');
    emoji.classList.add('floating-emoji');
    emoji.textContent = "😢";

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = Math.random() * 100 + "vh";
    emoji.style.setProperty('--x-move', (Math.random() * 50 - 25) + "vw");
    emoji.style.setProperty('--y-move', (Math.random() * 50 - 25) + "vh");
    emoji.style.animationDuration = (5 + Math.random() * 15) + "s";
    emoji.style.animationDelay = (Math.random() * 5) + "s";

    document.body.appendChild(emoji);
}
