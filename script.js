function openEnvelope() {
    // Get the envelope and images elements
    const envelope = document.querySelector('.envelope');
    const images = document.querySelector('.images');
    
    // Add the "opened" class to the envelope to trigger animation
    envelope.classList.add('opened');
    
    // Show the images after the envelope "opens" (you can adjust the timing)
    setTimeout(() => {
        images.classList.add('show');
    }, 500); // Delay for the animation effect (500ms matches the transition time)
}
