type stringAndNumber = string | number;
type stringOrArray = string | Array<string>;


class carro {
    public color: stringOrArray;
    public modelo: string;
    public marca: string;
    public descuento: boolean;
    public imagen: string;
    public precio: stringAndNumber;

}

const createNissanGtr = new carro();

const getContainerForCars = document.querySelector('.carros__grid');


function reUseCarForDOM(color: string, modelo: string, marca: string, descuento: boolean, imagen: string, precio: stringAndNumber){
    let createHtwo = document.createElement('h2');
    let createP = document.createElement('p');
    let createDiv = document.createElement('div');
    let createImage = document.createElement('img');

    createDiv.classList.add('carros__item');
    getContainerForCars?.append(createDiv);

    createHtwo.textContent = marca;
    createHtwo.classList.add('carros__subtitulo');
    createDiv.append(createHtwo);

    createImage.setAttribute('src', imagen);
    createImage.classList.add('carros__imagen');
    createDiv.append(createImage);

    createP.textContent = modelo;
    createP.classList.add('carros__descripcion');
    createDiv.append(createP);

}


reUseCarForDOM(createNissanGtr.color = "red",
    createNissanGtr.modelo = "Modelo 2019 con esto y esto",
    createNissanGtr.marca = "nissan",
    createNissanGtr.descuento = false,
    createNissanGtr.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Nissan_GT-R_02.JPG/1200px-Nissan_GT-R_02.JPG",
    createNissanGtr.precio= '1200'
)
//HEADER

window.addEventListener('load', ()=>{

    // var getLoader: any = document.querySelector('.loader');

    // setTimeout(()=>{
    //     getLoader.classList.add('hidden');
    // },1000)

    //EVENTO SCROLL PARA MENU
    function changeCss (this: any) {
        let navElement: any = document.querySelector("#event__header");
        this.scrollY > 20 ? navElement.classList.add('active') : navElement.classList.remove('active');
    }
    window.addEventListener("scroll", changeCss , false);

    //MENU HAMBURGUESA
    var getHamburgesaContainer: any = document.querySelector('.header__hamburguesa');
    var getHamburguesa: any = document.querySelector('.hamburguesa');
    var getAllBloques: any = document.querySelectorAll('.header__hamburguesa__bloque');

    getHamburguesa.addEventListener('click', ()=>{
        getHamburguesa.classList.add('active');
        getButtonCloseHamburguesa.classList.remove('active');
        setTimeout(()=>{
            getHamburgesaContainer.classList.add('active');
            getAllBloques.forEach((data: any)=>{
                data.classList.add('active');
            });
        },400);
    });

    var getButtonCloseHamburguesa: any = document.querySelector('.header__hamburguesa__close');

    getButtonCloseHamburguesa.addEventListener('click', ()=>{
        getHamburguesa.classList.remove('active');
        getButtonCloseHamburguesa.classList.add('active');
        setTimeout(()=>{
            getHamburgesaContainer.classList.remove('active');
        },1000);
        getAllBloques.forEach((data: any)=>{
            data.classList.remove('active');
        });
    });

    var getAllBloquesOfHeader: any = document.querySelectorAll('.header__hamburguesa__titulo');

    getAllBloquesOfHeader.forEach((data: any)=>{
        data.addEventListener('click', ()=>{
            data.classList.toggle('active');
            let nextElementSibling: any = data.nextElementSibling;
            nextElementSibling.classList.toggle('active');
        });
    });

    //SLIDER

    const getOwlPrev: any = document.querySelector('.owl-prev');
    const getOwlNext: any = document.querySelector('.owl-next');

    function setImageWithSrc(link: string, element: any){
        let createImage: any = document.createElement('img');
        createImage.setAttribute('src', link);

        element.append(createImage);
    }

    setImageWithSrc('./sources/img/angle-right-solid.svg', getOwlNext);
    setImageWithSrc('./sources/img/angle-left-solid.svg', getOwlPrev);


});







