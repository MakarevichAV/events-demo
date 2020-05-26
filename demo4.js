window.addEventListener('load', () => {

    const button = document.querySelector('button');

    const form = document.querySelector('form');

    for (const radio of document.querySelectorAll('input')) {
        radio.addEventListener('change', function() {
            button.classList.add('allowed');
        });
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (button.classList.contains('allowed')) {
            document.querySelector('.picture').style.display = 'block';
        }
    });


});

