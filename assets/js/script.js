const wrapper = document.querySelector("#wrapper");
const btnSwitch = document.querySelector(".btn--switch");

btnSwitch.addEventListener("change", (e) => {
    wrapper.classList.toggle("dark-mode");
    
})