     /* função de mudar o celular */
     function imgSlide(e) {
        document.querySelector('#phone').src = e;
    }
    /* função de mudar a cor do círculo*/
    function circleChange(color) {
        const circle = document.querySelector('.circle');
        circle.style.background = color
    }