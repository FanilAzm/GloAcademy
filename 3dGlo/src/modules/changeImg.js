const changeImg = () => {
    const image = document.querySelectorAll('.command__photo');

    image.forEach((item) => {
        const oldImage = item.getAttribute('src');
        item.addEventListener('mouseenter', (event) => {
            event.target.src = event.target.dataset.img;
        });

        item.addEventListener('mouseleave', (event) => {
            event.target.src = oldImage;
        });
    });
    
};

export default changeImg;