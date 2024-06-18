document.getElementById('spin').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('result');
    result.textContent = ''; // Clear previous result
    const segments = ['Shot', 'Kiss', 'Slap', 'Kiss', 'Shot', 'Shot'];

    // Reset transition to ensure smooth spin
    wheel.style.transition = 'none';
    wheel.style.transform = 'rotate(0deg)';
    setTimeout(() => {
        wheel.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)';
        
        const randomDeg = Math.floor(Math.random() * 360) + 1440; // At least 4 full rotations
        wheel.style.transform = `rotate(${randomDeg}deg)`;

        // Calculate which segment it lands on
        setTimeout(() => {
            const deg = randomDeg % 360;
            const index = Math.floor(deg / 90);
            const selectedSegment = segments[index];
            result.textContent = `Resultado: ${selectedSegment}`;

            // Display confetti animation
            displayConfetti();

        }, 4000); // Match the transition duration in CSS
    }, 10); // Slight delay to reset transition
});

function displayConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2 and 5 seconds
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`; // Random delay up to 2 seconds
        confettiContainer.appendChild(confettiPiece);
    }
}
