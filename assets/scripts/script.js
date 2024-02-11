//////////MENU//////////
let menu = document.querySelector(".menu")
document.querySelector(".bi-list").addEventListener("click", () => {
    if (!menu.classList.contains("show")) {
        menu.classList.add("show")
    }
})

document.querySelector(".bi-x").addEventListener("click", () => {
    if (menu.classList.contains("show")) {
        menu.classList.remove("show")
    }
})

////////Carousel-1/////////

document.addEventListener("DOMContentLoaded", () => {
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

document.addEventListener("DOMContentLoaded", function () {
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

//////////DATA//////////

document.addEventListener('DOMContentLoaded', function () {
    const pElements = document.querySelectorAll('p.pi');
    getData('pi1');

    pElements.forEach(function (pElement) {
        pElement.addEventListener('click', function () {
            if (!this.classList.contains('act')) {
                pElements.forEach(function (p) {
                    p.classList.remove('act');
                });
                this.classList.add('act');
            }
        });
    });
});

let url1 = '  http://localhost:3000/main/';
let url2 = '  http://localhost:3000/desserts/';
let url3 = '  http://localhost:3000/drinks/';

async function getData(id) {
    let url = '';
    if (id === 'pi1') {
        url = url1;
    } else if (id === 'pi2') {
        url = url2;
    } else if (id === 'pi3') {
        url = url3;
    }

    try {
        const res = await axios.get(url);
        const data = res.data;

        const cards = document.getElementById('cards');
        cards.innerHTML = '';

        data.forEach(e => {
            cards.innerHTML +=`
            <div class="card">
            <div class="img">
                <img src="${e.img}" alt="">
            </div>
            <div class="name">
                <h2>${e.name}</h2>
                <h3>${e.ing}</h3>
            </div>
            <p>$ ${e.price}</p>
        </div>
            `
        });

    } catch (error) {
        console.error('Data is not found:', error);
    }
}