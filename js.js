let movies = [
    {
    name: "falcon and the winter soldier",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime aliquam non! Nisi non voluptatem, eum nemo amet maiores quibusdam",
    Image: "images/slider 2.PNG"
    },
    {
    name: "Loki",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime aliquam non! Nisi non voluptatem, eum nemo amet maiores quibusdam", 
    Image: "images/slider 1.PNG"
    },
    {
        name: "Wanda Vision",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime aliquam non! Nisi non voluptatem, eum nemo amet maiores quibusdam", 
    Image: "images/slider 3.PNG"
    },
    {
        name: "Raya and the last dragon",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime aliquam non! Nisi non voluptatem, eum nemo amet maiores quibusdam", 
    Image: "images/slider 4.PNG"
    },
    {
        name: "Luca",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime aliquam non! Nisi non voluptatem, eum nemo amet maiores quibusdam", 
    Image: "images/slider 5.PNG"
    }  
];

const caraousel = document.querySelector('.caraousel');
let sliders=[];

let slideIndex=0; //track the current slide

const createSlide = () => {
    // console.log('inside cs')
    if(slideIndex >= movies.length){
        slideIndex=0;
    }
    // create DOM elements
    let slide= document.createElement('div');
    var imgElement= document.createElement('img');
    let content= document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');
    
    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    // p.appendChild(h1);
    content.appendChild(h1);
    content.appendChild(p);
    // console.log(content)
    slide.appendChild(imgElement);
    caraousel.appendChild(slide);
    console.log(slide)

    // setting up images
    imgElement.src = movies[slideIndex].Image;
    // console.log(imgElement)
    slideIndex++;

    //setting elements classnames
    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    // console.log(slide);
    sliders.push(slide);

    if(sliders.length) {
        sliders[0].styles.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
            30 * (sliders.length - 2)
        }px)`;
    }
};

for(let i= 0; i<3; i++){
    createSlide();
    // console.log('inside the loop')
}

setInterval(()=>{
    createSlide();
},3000);
// console.log('logging')