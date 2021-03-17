const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "USER";
const SHOWING_CN = "showing";

// Save name localstorage //
const saveName = (text) => {
    localStorage.setItem(USER_LS, text);
}
// Submit //
const handleSubmitName = (event) =>{
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
// Ask name //
const askForName = () => {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmitName);
}
// Display greeting //
const paintGreeting = (text) => {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `HI ${text}! HAVE A GOOD DAY`;
}
// Load name //
const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
};

init();