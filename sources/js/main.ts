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

const getContainerForCars = document.querySelector('.carros__item');


function reUseCarForDOM(color: string, modelo: string, marca: string, descuento: boolean, imagen: string, precio: stringAndNumber){
    let createHtwo = document.createElement('h2');
    let createP = document.createElement('p');
    let createDiv = document.createElement('div');
    let createImage = document.createElement('img');


    createHtwo.textContent = marca;
    createHtwo.classList.add('carros__subtitulo');
    getContainerForCars?.append(createHtwo);

    createImage.setAttribute('src', imagen);
    createImage.classList.add('carros__imagen');
    getContainerForCars?.append(createImage);

    createP.textContent = modelo;
    createP.classList.add('carros__descripcion');
    getContainerForCars?.append(createP);

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

    var getLoader: any = document.querySelector('.loader');

    setTimeout(()=>{
        getLoader.classList.add('hidden');
    },1000)

    function changeCss (this: any) {
        let navElement: any = document.querySelector("#event__header");
        this.scrollY > 20 ? navElement.classList.add('active') : navElement.classList.remove('active');
    }
    window.addEventListener("scroll", changeCss , false);

    var getHamburguesa: any = document.querySelector('.hamburguesa');

    getHamburguesa.addEventListener('click', ()=>{
        getHamburguesa.classList.toggle('active');
    });
})

