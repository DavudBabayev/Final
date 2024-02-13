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


//////////DATA//////////


const urls = {
    'main': 'http://localhost:3000/main/',
    'desserts': 'http://localhost:3000/desserts/',
    'drinks': 'http://localhost:3000/drinks/'
};

const card = document.querySelector("#cards");

document.addEventListener('DOMContentLoaded', () => {
    const id = new URLSearchParams(window.location.search).get("id");
    const category = new URLSearchParams(window.location.search).get("category");

    if (category === 'main') {
        getCardById(id, urls.main);
    } else if (category === 'desserts') {
        getCardById(id, urls.desserts);
    } else if (category === 'drinks') {
        getCardById(id, urls.drinks);
    }
});

async function getCardById(id, url) {
    try {
        const res = await axios.get(url + id);
        const data = res.data;

        card.innerHTML = `
            <div class="img">
                <img src="${data.img}" alt="">
            </div>
            <div class="text">
                <h1>${data.name}</h1>
                <h3>${data.ing}</h3>
                <p>${data.info}</p>
            </div>
        `;
    } catch (error) {
        console.error('Data is not found:', error);
    }
}