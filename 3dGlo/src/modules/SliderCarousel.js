class SliderCarousel{
    constructor({main, wrap, position = 0, prev, next, slidesToShow = 3, infinity = false, responsive = []}){

        if(!main || !wrap){
            console.warn('sliderCarousel: Необходимо 2 свойства "main" и "wrap"!');
        }
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.option = {
            position,
            infinity,
            slideWidth: Math.floor(100 / this.slidesToShow)
        };
        this.responsive = responsive;
    }

    init(){
        this.addClass();
        this.addStyle();
        if(this.prev && this.next){
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        if(this.responsive){
            this.responsiveInit();
        }

    }

    addClass(){
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for(let item of this.slides){
            item.classList.add('glo-slider__item');
        }
    }

    addStyle(){
        let style = document.getElementById('sliderCarousel');
        
        if(!style){
            style = document.createElement('style');
            style.id = 'sliderCarousel';
        }
        
        style.textContent = `
            .glo-slider {
                overflow: hidden;
                position: relative;
            }
            .glo-slider__wrap {
                display: flex;
                transition: transform 0.5s;
                will-change: transform;
            }
            .glo-slider__item {
                display: flex;
                align-items: center;
                flex: 0 0 ${this.option.slideWidth}%;
                margin: auto 0 !important;
            }
        `;
        document.head.appendChild(style);
    }

    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider(){
        if(this.option.infinity || this.option.position > 0){
            --this.option.position;
            if(this.option.position < 0){
                this.option.position = this.slides.length - this.slidesToShow;
            }
            this.wrap.style.transform = `translateX(-${this.option.position * this.option.slideWidth}%)`;
        }
    }

    nextSlider(){
        if(this.option.infinity || this.option.position < this.slides.length - this.slidesToShow){
            ++this.option.position;
            if(this.option.position > this.slides.length - this.slidesToShow){
                this.option.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.option.position * this.option.slideWidth}%)`;
        }
    }

    addArrow(){
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);

        const style = document.createElement('style');
        style.textContent = `
            .glo-slider__prev,
            .glo-slider__next {
                position: absolute;
                top: 25px;
                margin: 0 10px;
                border: 15px solid transparent;
                outline: none;
            }
            .glo-slider__prev {
                border-right-color: #19b5fe;
                left: -40px;
            }
            .glo-slider__next {
                border-left-color: #19b5fe;
                right: -40px;
            }

            .glo-slider__prev:hover,
            .glo-slider__next:hover,
            .glo-slider__prev:focus,
            .glo-slider__next:focus {
                background-color: transparent;
            }
        `;
        document.head.appendChild(style);
    }

    responsiveInit(){
        const slideToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = () => {
            const windowWidth = document.documentElement.clientWidth;
            if(windowWidth < maxResponse){
                for(let i = 0; i < allResponse.length; i++){
                    if(windowWidth < allResponse[i]){
                        this.slidesToShow = this.responsive[i].slideToShow;
                        this.option.slideWidth = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    }
                }
            } else {
                this.slidesToShow = slideToShowDefault;
                this.option.slideWidth = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };
        checkResponse();
        
        window.addEventListener('resize', checkResponse);
    }
}

export default SliderCarousel;