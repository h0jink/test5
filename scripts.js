function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const pictures = document.getElementById('pictures');
  
  // Animate envelope closing
  envelope.style.animation = 'envelopeAnimation 0.5s ease-in-out forwards';
  
  // Wait for the animation to finish before removing the envelope and showing the pictures
  setTimeout(() => {
    envelope.style.display = 'none';
    pictures.style.display = 'flex'; // Show the pictures section
  }, 500); // Match this timing with the envelope's animation duration
}
