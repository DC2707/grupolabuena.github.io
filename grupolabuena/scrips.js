document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-btn');
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const songSrc = this.getAttribute('data-src');
            audioSource.src = songSrc;
            audioPlayer.load();
            audioPlayer.play();
        });
    });
});