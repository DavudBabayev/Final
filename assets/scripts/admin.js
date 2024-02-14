let menuLi = document.querySelector(".menu-li");
let second = document.querySelector(".second");

menuLi.addEventListener("click", () => {
    if (menuLi.classList.contains("active")) {
        menuLi.classList.remove("active");
        if (window.innerWidth < 992) {
            second.style.width = "0px";
            menuLi.style.marginRight = "0px";
        } else {
            second.style.height = "0px";
            menuLi.style.marginBottom = "0px";
        } 
    } else {
        menuLi.classList.add("active");
        if (window.innerWidth < 992) {
            second.style.width = "260px";
            menuLi.style.marginRight = "270px";
        } else {
            second.style.height = "120px";
            menuLi.style.marginBottom = "130px";
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const dataElements = document.querySelectorAll('.data');
    const data1Elements = document.querySelectorAll('.data1');

    dataElements.forEach(dataElement => {
        dataElement.addEventListener('click', () => {
            dataElements.forEach(element => {
                if (element !== dataElement) {
                    element.classList.remove('active');
                }
            });
            dataElement.classList.add('active');

            const index = Array.from(dataElements).indexOf(dataElement);
            data1Elements.forEach((data1Element, i) => {
                if (i === index) {
                    data1Element.style.display = 'flex';
                } else {
                    data1Element.style.display = 'none';
                }
            });
        });
    });
});

//////////FORM//////////

let form = document.querySelector("form");
let fileInp = document.querySelector("#img");
let imageDiv = document.querySelector("img");
let nameInp = document.querySelector("#name");
let ingInp = document.querySelector("#ing");
let infoInp = document.querySelector("#info");
let priceInp = document.querySelector("#price");
let menuSelect = document.querySelector("#menu");

fileInp.addEventListener("change", () => {
    let src = fileInp.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(src);
    reader.onload = function (e) {
        imageDiv.src = e.target.result;
    }
    console.log(src);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (menuSelect.value === "asdf") {
        alert("Please select a menu");
        return;
    }

    let object = {
        img: imageDiv.src,
        name: nameInp.value,
        ing: ingInp.value,
        info: infoInp.value,
        price: priceInp.value
    };

    axios.post(`http://localhost:3000/${menuSelect.value}`, object)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.error("Error:", err);
        });
});

//////////DATA//////////

let url1 = "http://localhost:3000/main/";
let card1 = document.querySelector(".main table tbody");

let url2 = "http://localhost:3000/desserts/";
let card2 = document.querySelector(".desserts table tbody");

let url3 = "http://localhost:3000/drinks/";
let card3 = document.querySelector(".drinks table tbody");

async function getAll(url, card) {
    try {
        let res = await axios.get(url);
        let data = res.data;
        card.innerHTML = '';

        data.forEach(element => {
            card.innerHTML += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.ing}</td>
                    <td>$ ${element.price}</td>
                    <td><button onclick="dc('${url}', ${element.id})">Delete</button></td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

function dc(url, id) {
    try {
        axios.delete(url + id);
    } catch (error) {
        console.error("Error:", error);
    }
}

getAll(url1, card1);
getAll(url2, card2);
getAll(url3, card3);

const reservationTableBody = document.querySelector('.reservation table tbody');
const reservationUrl = 'http://localhost:3000/reservation/';

async function getAllReservations() {
    try {
        const response = await axios.get(reservationUrl);
        const reservations = response.data;

        reservationTableBody.innerHTML = '';

        reservations.forEach(reservation => {
            reservationTableBody.innerHTML += `
                <tr>
                    <td>${reservation.id}</td>
                    <td>${reservation.name}</td>
                    <td>${reservation.email}</td>
                    <td>${reservation.phone}</td>
                    <td>${reservation.date}</td>
                    <td>${reservation.time}</td>
                    <td>${reservation.person}</td>
                    <td><button onclick="deleteReservation(${reservation.id})">Delete</button></td>
                </tr>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

async function deleteReservation(id) {
    try {
        await axios.delete(`${reservationUrl}${id}`);
        await getAllReservations();
    } catch (error) {
        console.error('Error:', error);
    }
}

getAllReservations();

const contactTableBody = document.querySelector('.contact table tbody');
const contactUrl = 'http://localhost:3000/contact';

async function getAllMessages() {
    try {
        const response = await axios.get(contactUrl);
        const messages = response.data;

        contactTableBody.innerHTML = '';

        messages.forEach(message => {
            contactTableBody.innerHTML += `
                <tr>
                    <td>${message.id}</td>
                    <td>${message.name}</td>
                    <td>${message.email}</td>
                    <td>${message.message}</td>
                    <td><button onclick="deleteMessage(${message.id})">Delete</button></td>
                </tr>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

async function deleteMessage(id) {
    try {
        await axios.delete(`${contactUrl}/${id}`);
        await getAllMessages();
    } catch (error) {
        console.error('Error:', error);
    }
}

getAllMessages();