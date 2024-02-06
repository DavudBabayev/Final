//////////MENU//////////
let menu = document.querySelector(".menu")
document.querySelector(".bi-list").addEventListener("click", ()=>{
    if (!menu.classList.contains("show")) {
        menu.classList.add("show")
    }
})

document.querySelector(".bi-x").addEventListener("click", ()=>{
    if (menu.classList.contains("show")) {
        menu.classList.remove("show")
    }
})

////////Carousel-1/////////

document.addEventListener("DOMContentLoaded", ()=> {
    const items = document.querySelectorAll(".items");
    let currentIndex = 0;
    const totalItems = items.length;

    function showItem(index) {
        items.forEach(item => item.style.opacity = 0);
        items[index].style.opacity = 1;
        const offset = -index * 100;
        items[index].style.transform = `translateX(${offset}%)`;
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    showItem(currentIndex);

    setInterval(nextItem, 4000);
});

/////////VIDEO/////////

document.addEventListener("DOMContentLoaded", function() {
    const videoButton = document.querySelector("#video");
    const videoElement = document.querySelector("#fullscreen-video");

    videoButton.addEventListener("click", () => {
        videoElement.style.display = "block";
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        }
    });

    window.addEventListener("resize", () => {
        if (!isVideoInFullscreen()) {
            videoElement.pause();
        }
    });

    document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
            videoElement.style.display = "none";
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            videoElement.style.display = "none";
        }
    });
});