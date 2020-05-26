    const audio = document.querySelector('audio');
    const picture = document.querySelector('img');

    audio.addEventListener('play', () => {
        picture.style.display = 'block';
    });
    audio.addEventListener('pause', () => {
        picture.style.display = 'none';
    });