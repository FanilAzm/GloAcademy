document.addEventListener("DOMContentLoaded", function(event) {
    let body = document.querySelector('body');

    function DomElement(selector, height, width, bg, fontSize){
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }

    DomElement.prototype.create = function(){
        let div,
            p;
            
        if(this.selector.substring(0, 1) === '.'){
            div = document.createElement('div');
            div.setAttribute('class', this.selector.slice(1));
        }
        if(this.selector.substring(0, 1) === '#'){
            p = document.createElement('p');
            p.setAttribute('id', this.selector.slice(1));
        }

        div.style.cssText = `
            height: 100px;
            width: 100px;
            background-color: blue;
            font-size: 20px;
            position: absolute;
        `;

        return div || p;
    };

    let tagElem = new DomElement('.start');
    tagElem.create();
    body.appendChild(tagElem.create());
    console.dir(tagElem.create());

    // document.addEventListener('keydown', catchKey);

    // function catchKey(){
    //     document.addEventListener('keydown', function(e){
    //         let start = document.querySelector('start');
    //         if(e.key === 'ArrowUp'){
    //             console.log(start);
    //         }
    //     });
    // }




















});
