function openEnvelope() {
    document.querySelector('.envelope').classList.add('opened');
    setTimeout(() => {
        document.querySelector('.images').classList.add('show');
    }, 800);
}
