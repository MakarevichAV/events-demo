window.addEventListener('load', () => {

    const input = document.querySelector('.change');
    const element = document.querySelector('.element');
    input.addEventListener('input', function() {
        
        let duration = this.value / 10;
        element.setAttribute('style', `animation-duration: ${10.1 - duration}s;`);

    });
});