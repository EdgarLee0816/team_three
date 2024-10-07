
document.addEventListener("DOMContentLoaded", () => {

const home = document.querySelector("#home p");
const about = document.getElementById("about");
const port = document.getElementById("portfolio");
const event = document.getElementById("event");
const contact = document.getElementById("contact");

const changeY = Math.trunc(window.scrollY);

    window.addEventListener("scroll", () => {

        home.innerText = Math.trunc(window.scrollY);
/****************************about 동작******************************/
    if (window.scrollY >= 400) {
        about.style.transform = "translateX(0)"
    }
     else if (window.scrollY <= 800) {
        about.style.transform = "translateX(-100vw)"
    } else if (window.scrollY <= 2000) {
        port.style.transform = "translateX(100vw)"
    } else if (window.scrollY >= 2400) {
        port.style.transform = "translateX(0)"
    }
    else if (window.scrollY >= 2500) {
        about.style.transform = "translateX(100vw)"
    }

   else if (window.scrollY <= 3100) {
        event.style.transform = "translateX(-100vw)"
    } 
    else if (window.scrollY >= 3500) {
        event.style.transform = "translateX(0)"
    }
    else if (window.scrollY >= 3600) {
        port.style.transform = "translateX(-100vw)"
    }
      else if (window.scrollY >= 4600) {
        event.style.transform = "translateX(100vw)"
    }


    /****************************portfolio 동작******************************/
    

   
    
    /****************************event 동작******************************/
    

  
    

/****************************contact 동작******************************/

    } );





});//////////////////////끝