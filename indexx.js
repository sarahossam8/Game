import { detailshome } from "./ui.js";

detailshome

class home{
    constructor(){
    
        document.querySelectorAll(".nav-link").forEach((link) =>{
            link.addEventListener("click", async() => {
                console.log("hello");
                const category =link.innerHTML;
                this.getapi(category);
            }
        )
        })

        // this.getapi("mmorpg");

        this.loading= document.querySelector(".loading")

    }

 async getapi(cat){
    this.loading.classList.remove('d-none');

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bb95ff6b6cmshe0a0f3775da0b76p14fd17jsn84e1a93d5c35',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const response =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options)
    const Data =await response.json();
    this.loading.classList.add('d-none');
    console.log(Data);
    const detailhome =new detailshome();

    detailhome.display(Data);
    document.querySelectorAll(".card").forEach(card=>{
        card.addEventListener("click",()=>{
            console.log("sara")
        })
    })
}
}
const Home =new home();
Home.getapi('mmorpg');