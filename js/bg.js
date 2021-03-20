const body = document.querySelector("body");

const bgs = ["#51bad4"," #ff5178", "#b355f1", "#f1cb4d"];


const randomColor = () => {
    const randomNum = Math.floor(Math.random() * bgs.length);
    body.style.backgroundColor = bgs[randomNum];
}

function init(){
    randomColor();
}
init();