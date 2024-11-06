const url = 'https://randomuser.me/api/?results=12';
let button = document.querySelector("button");
let list = document.querySelector("#people-list");
// let photo = document.querySelector("#foto");
// let name = document.querySelector("#nombre");
// let address = document.querySelector("#direccion");
// let phone = document.querySelector("#telefono");

const addPeopleList = (person) => {
    list.classList.add("people-list");

    
    const card = document.createElement("article");
    card.classList.add("tarjeta");

    const photo = document.createElement("img");
    photo.setAttribute("src", person.picture.large);

    const name = document.createElement("article");
    name.textContent = person.name.first+" "+person.name.last;

    const address = document.createElement("article");
    address.textContent = person.location.street.name+", "+person.location.street.number;

    const phone = document.createElement("article");
    phone.textContent = person.phone;

    card.appendChild(photo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);

    list.appendChild(card);
}

const getPerson = () => {
    list.innerHTML = "";
    fetch(url)
        .then(response => response.json())
        .then(response => {
            // console.log(response);
            response.results.forEach(person => {
                addPeopleList(person);            
            });
        });
}

button.addEventListener("click", () => {
    getPerson();
});

getPerson();