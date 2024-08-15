document.querySelectorAll('.heart').forEach(heart => {
    heart.addEventListener('click', () => {
        const note = heart.getAttribute('data-note');
        const songSrc = heart.getAttribute('data-song');
        alert(note);

        const song = document.getElementById('song');
        song.src = songSrc;
        song.play();
    });
});

function showAlert(message) {
    document.getElementById('alert-message').innerText = message;
    document.getElementById('custom-alert').style.display = 'flex';
}

function closeAlert() {
    document.getElementById('custom-alert').style.display = 'flex';
}