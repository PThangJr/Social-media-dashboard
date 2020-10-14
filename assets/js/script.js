const wrapper = document.querySelector("#wrapper");
const btnSwitch = document.querySelector(".btn--switch");

btnSwitch.addEventListener("change", (e) => {
    if (e.target.checked) {
        wrapper.classList.add("dark-mode");
    }
    else {
        wrapper.classList.remove("dark-mode");        
    }
    
})