window.addEventListener('load', () => {

    let moveBlock = document.querySelector('.move-block');

    document.addEventListener('keydown', function(event) {
        
        if (event.code === 'ArrowLeft') {
            moveBlock.style.left = moveBlock.offsetLeft - 10 + 'px';
        } else if (event.code === 'ArrowUp') {
            moveBlock.style.top = moveBlock.offsetTop - 10 + 'px';
        } else if (event.code === 'ArrowRight') {
            moveBlock.style.left = moveBlock.offsetLeft + 10 + 'px';
        } else if (event.code === 'ArrowDown') {
            moveBlock.style.top = moveBlock.offsetTop + 10 + 'px';
        }
    })

});