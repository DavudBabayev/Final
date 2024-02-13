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




/////////Carousel - 2//////////

document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer1 = document.querySelector(".cards1");
    const cards1 = document.querySelectorAll(".cardcar1 .card");
    const nextButton1 = document.querySelector("#next1");
    const prevButton1 = document.querySelector("#previev1");
    const cardsContainer2 = document.querySelector(".cards2");
    const cards2 = document.querySelectorAll(".cardcar2 .card");
    const nextButton2 = document.querySelector("#next2");
    const prevButton2 = document.querySelector("#previev2");
    const cardsContainer3 = document.querySelector(".cards3");
    const cards3 = document.querySelectorAll(".cardcar3 .card");
    const nextButton3 = document.querySelector("#next3");
    const prevButton3 = document.querySelector("#previev3");

    cardsContainer1.scroll({behavior: 'smooth'});
    cardsContainer2.scroll({behavior: 'smooth'})
    cardsContainer3.scroll({behavior: 'smooth'})


    nextButton1.addEventListener("click", function() {
        cardsContainer1.scrollLeft += 220;
    });

    prevButton1.addEventListener("click", function() {
        cardsContainer1.scrollLeft -= 100;
    });

    nextButton2.addEventListener("click", function() {
        cardsContainer2.scrollLeft += 220;
    });

    prevButton2.addEventListener("click", function() {
        cardsContainer2.scrollLeft -= 100;
    });

    nextButton3.addEventListener("click", function() {
        cardsContainer3.scrollLeft += 220;
    });

    prevButton3.addEventListener("click", function() {
        cardsContainer3.scrollLeft -= 100;
    });
});


/////////////DATA//////////

const categories = {
    'card1': 'main',
    'card2': 'desserts',
    'card3': 'drinks'
};

const cardElements = {
    'card1': document.querySelector(".cardcar1"),
    'card2': document.querySelector(".cardcar2"),
    'card3': document.querySelector(".cardcar3")
};

let dataLength = {
    'card1': 0,
    'card2': 0,
    'card3': 0
};

document.addEventListener('DOMContentLoaded', () => {
    Object.keys(cardElements).forEach(id => {
        getData(id, categories[id]);
    });
});

async function getData(id, category) {
    const url = `http://localhost:3000/${category}/`;

    try {
        const { data } = await axios.get(url);
        dataLength[id] = data.length;

        renderData(data, cardElements[id], category);
        updateCardWidth();
    } catch (error) {
        console.error('Data is not found:', error);
    }
}

function updateCardWidth() {
    let card1Width = (dataLength['card1'] * 300) + ((dataLength['card1'] - 1) * 20);
    let card2Width = (dataLength['card2'] * 300) + ((dataLength['card2'] - 1) * 20);
    let card3Width = (dataLength['card3'] * 300) + ((dataLength['card3'] - 1) * 20);

    cardElements['card1'].style.width = `${card1Width}px`;
    cardElements['card2'].style.width = `${card2Width}px`;
    cardElements['card3'].style.width = `${card3Width}px`;
}

function renderData(data, cardElement, category) {
    cardElement.innerHTML = '';

    data.forEach(item => {
        cardElement.innerHTML += `
        <div class="card">
            <div class="info">
                <a href="./details.html?id=${item.id}&category=${category}"><i class="bi bi-info-circle"></i> See More</a>
                <a href="#"><i class="bi bi-heart"></i> Add to WishList</a>
                <a href="#"><i class="bi bi-cart"></i> Add to Cart</a>
            </div>
            <img src="${item.img}" alt="">
            <p>${item.name}</p>
        </div>
        `;
    });
}