const togglePopup = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupContent = document.querySelector('.popup-content'),
          clientWidth = document.documentElement.clientWidth;

    const popupAnimate = () => {
        if(clientWidth <= 768){
            return;
        } else {
            let start = Date.now();
            let timer = setInterval(function() {
                let timePassed = Date.now() - start;
                popupContent.style.top = timePassed / 25 + '%';
                if (timePassed > 400) clearInterval(timer);
            }, 20);
        }
    };

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popupAnimate();
            popup.style.display = 'block';
        });
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;
        if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if(!target){
                popup.style.display = 'none';
            }
        }
    });
};

export default togglePopup;