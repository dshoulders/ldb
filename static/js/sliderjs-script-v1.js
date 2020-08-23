const slider = document.querySelector("#slider");
if (slider) {
    let items = slider.querySelectorAll(".slider-item");
    let switcher = slider.querySelector(".switch");    
    const itemCount = items.length;
    let l = null;
    let i = 0;

    for (; switcher.querySelectorAll("i").length !== itemCount;) {
        let element = document.createElement("i");
        switcher.appendChild(element);
    }

    switcher = switcher.querySelectorAll("i");

    const c = (l) => {
        0 == l ? (items[itemCount - 1].classList.remove("show"), 
        items[itemCount - 1].classList.add("close"), 
        switcher[itemCount - 1].classList.remove("active")) : (items[l - 1].classList.remove("show"), 
        items[l - 1].classList.add("close"), switcher[l - 1].classList.remove("active")), 
        l == itemCount - 1 ? items[0].classList.remove("close") : items[l + 1].classList.remove("close"), 
        switcher[l].classList.add("active"), 
        items[l].classList.add("show");
    };

    const r = (l) => {
        0 == l ? (items[itemCount - 1].classList.remove("show"), 
        items[itemCount - 1].classList.add("close"), 
        switcher[itemCount - 1].classList.remove("active")) : (items[l - 1].classList.remove("show"), 
        items[l - 1].classList.add("close"), switcher[l - 1].classList.remove("active")), 
        l == itemCount - 1 ? items[0].classList.remove("close") : items[l + 1].classList.remove("close"), 
        l < itemCount - 1 ? (items[l + 1].classList.remove("show"), 
        switcher[l + 1].classList.remove("active")) : (items[0].classList.remove("show"), 
        switcher[0].classList.remove("active")), 
        switcher[l].classList.add("active"), 
        items[l].classList.add("show");
    };
        
    const startSlideShow = () => {
        l = setInterval(() => {
            nextSliderImage();
        }, 5000);
    };

    const nextSliderImage = () => {
        i = i + 1, 
        i == itemCount && (i = 0), 
        c(i), 
        clearInterval(l), 
        startSlideShow();
    }

    const previousSliderImage = () => {
        i = i -1, 
        -1 == i && (i = itemCount - 1), 
        r(i), 
        clearInterval(l), 
        startSlideShow();
    }

    const a = slider.querySelector(".prev");
    const o = slider.querySelector(".next");
    o.addEventListener("click", nextSliderImage);
    a.addEventListener("click", previousSliderImage);
    c(i);
    startSlideShow();
}