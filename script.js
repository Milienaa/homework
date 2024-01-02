'use strict'

class ItemBox {
    constructor(picWrapper) {
        this.elemStr = picWrapper;
        this.pictures = document.querySelectorAll(this.elemStr);
        this.album = document.querySelector('.album');
        this.img = this.album.querySelector('img');
    }

    defaultMode() {
        this.img.setAttribute('src', "img/apple.png");
        this.pictures[0].classList.add('active');
    }

    openItemAlbum(e){
        if(e.target.matches(this.elemStr)){
            const url = e.target.getAttribute('src');
            this.img.setAttribute('src', url);

            this.pictures.forEach((elem)=> {
                elem.classList.remove('active');
            })
            e.target.classList.add('active');
        }
    }

    init() {
        console.dir(this);
        this.defaultMode();
       
        this.pictures.forEach(elem => elem.addEventListener('click',this.openItemAlbum.bind(this)));
    }

}