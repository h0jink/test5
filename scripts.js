function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const pictures = document.getElementById('pictures');

  // Fade out the envelope
  envelope.style.opacity = '0';
  setTimeout(() => {
    envelope.style.display = 'none'; // Hide the envelope after fading out
  }, 500); // Match the transition duration (0.5s)

  // Show the pictures
  pictures.style.display = 'block';
}
