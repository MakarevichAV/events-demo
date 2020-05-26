window.addEventListener('load', () => {

    let card = document.querySelector('.img-block');

    card.addEventListener('click', function() {       
        card.classList.add('animate');
    });

});