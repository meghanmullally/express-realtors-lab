/* -------- STATE -------- */
let apartments;
let houses;

/* -------- CACHE ELEMENTS -------- */
const apartmentListEl = document.querySelector("#apartments-list");
const houseListEl = document.querySelector("#houses-list");

fetchApartments();
fetchHouses();

/* --------  APARTMENT INFO -------- */
async function fetchApartments() {
    const response = await fetch("http://localhost:3000/apartments");
    apartments = await response.json();
    renderApartment();
    // console.log("apartments", apartments);
}

function renderApartment() {
    apartments.forEach((apartment) => {
        const card = document.createElement("div");

        card.classList.add("apartment-card");

        // listing id
        const apartmentIdEl = document.createElement('lo');
        apartmentIdEl.innerText = `Listing # ${apartment.id}`

        // create address list element
        const addressEl = document.createElement("li");
        addressEl.innerText = `Address: ${apartment.address}`;

        // create price list element
        const priceEl = document.createElement("li");
        priceEl.innerText = `Price: $${apartment.price}`;

        // create sqFt list element
        const sqFtEl = document.createElement("li");
        sqFtEl.innerText = `SqFt: ${apartment.sqFt}`;

        // create yearBuilt list element
        const yearBuiltEl = document.createElement("li");
        yearBuiltEl.innerText = `Year Built: ${apartment.yearBuilt}`;

        // create bedroom list element
        const bedroomEl = document.createElement("li");
        bedroomEl.innerText = `Bedrooms: ${apartment.bedrooms}`;

        // create bathroom list element
        const bathroomEl = document.createElement("li");
        bathroomEl.innerText = `Bathrooms: ${apartment.bathrooms}`;

        // create parkingSpace list element
        const parkingSpaceEl = document.createElement("li");
        parkingSpaceEl.innerText = `Parking Spaces: ${apartment.parkingSpaces}`;

        // create laundry list element
        const laundryEl = document.createElement("li");
        laundryEl.innerText = `laundry: ${apartment.laundry}`;
        if (apartment.laundry) {
            laundryEl.style.color = "green";
        }

        // create swimmingPool list element
        const swimmingPoolEl = document.createElement("li");
        swimmingPoolEl.innerText = `Swimming Pool: ${apartment.swimmingPool}`;
        if (apartment.swimmingPool) {
            swimmingPoolEl.style.color = "green";
        }

        // create hasBalcony list element
        const hasBalconyEl = document.createElement("li");
        hasBalconyEl.innerText = `Balcony: ${apartment.hasBalcony}`;
        if (apartment.hasBalcony) {
            hasBalconyEl.style.color = "green";
        }

        // create hasGym list element
        const hasGymEl = document.createElement("li");
        hasGymEl.innerText = `Gym: ${apartment.hasGym}`;
        if (apartment.hasGym) {
            hasGymEl.style.color = "green";
        }

        // create hasFireplace list element
        const hasFireplaceEl = document.createElement("li");
        hasFireplaceEl.innerText = `Fireplace: ${apartment.hasFireplace}`;
        if (apartment.hasFireplace) {
            hasFireplaceEl.style.color = "green";
        }

        // create waterfrontView list element
        const waterfrontViewEl = document.createElement("li");
        waterfrontViewEl.innerText = `Waterfront view: ${apartment.waterfrontView}`;
        if (apartment.waterfrontView) {
            waterfrontViewEl.style.color = "green";
        }

        // create hasGarage list element
        const hasGarageEl = document.createElement("li");
        hasGarageEl.innerText = `Garage: ${apartment.hasGarage}`;
        if (apartment.hasGarage) {
            hasGarageEl.style.color = "green";
        }

        // create isPetFriendly list element
        const isPetFriendlyEl = document.createElement("li");
        isPetFriendlyEl.innerText = `Pet Friendly: ${apartment.isPetFriendly}`;
        if (apartment.isPetFriendly) {
            isPetFriendlyEl.style.color = "green";
        }

        // Append the list element to the card
        card.appendChild(apartmentIdEl);
        card.appendChild(addressEl);
        card.appendChild(priceEl);
        card.appendChild(sqFtEl);
        card.appendChild(yearBuiltEl);
        card.appendChild(bedroomEl);
        card.appendChild(bathroomEl);
        card.appendChild(parkingSpaceEl);
        card.appendChild(laundryEl);
        card.appendChild(swimmingPoolEl);
        card.appendChild(hasBalconyEl);
        card.appendChild(hasGymEl);
        card.appendChild(hasFireplaceEl);
        card.appendChild(waterfrontViewEl);
        card.appendChild(hasGarageEl);
        card.appendChild(isPetFriendlyEl);

        // Append the card to the apartmentListEl
        apartmentListEl.appendChild(card);
    });
}

/* -------- HOUSE INFO -------- */
async function fetchHouses() {
    const response = await fetch("http://localhost:3000/houses");
    houses = await response.json();
    renderHouse();
}

function renderHouse() {
    houses.forEach((house) => {
        const card = document.createElement("div");

        card.classList.add("house-card");

         // listing id
         const houseIdEl = document.createElement('lo');
         houseIdEl.innerText = `Listing # ${house.id}`
 

        // house address
        const houseAddEl = document.createElement("li");
        houseAddEl.innerText = `Address: ${house.address}`;

        // house price
        const housePriceEl = document.createElement("li");
        housePriceEl.innerText = `Price: $${house.price}`;

        // house sqFt
        const houseSqFtEl = document.createElement("li");
        houseSqFtEl.innerText = `SqFt: ${house.sqFt}`;

        // house year built
        const houseYearBuiltEl = document.createElement("li");
        houseYearBuiltEl.innerText = `Year Built: ${house.yearBuilt}`;

        // bedrooms
        const numberOfBedroomsEl = document.createElement("li");
        numberOfBedroomsEl.innerText = `Number of Bedrooms: ${house.numberOfBedrooms}`;

        // bathrooms
        const numberOfBathroomsEl = document.createElement("li");
        numberOfBathroomsEl.innerText = `Number of Bathrooms: ${house.numberOfBathrooms}`;

        // parking spaces
        const parkingSpaceEl = document.createElement("li");
        parkingSpaceEl.innerText = `Parking Spaces: ${house.parkingSpaces}`;

        // levels
        const levelsEl = document.createElement("li");
        levelsEl.innerText = `Levels: ${house.levels}`;

        // has porch
        const hasPorchEl = document.createElement("li");
        hasPorchEl.innerText = `Has Porch: ${house.hasPorch}`;
        if (house.hasPorch) {
            hasPorchEl.style.color = "green";
        }
        // has backyard
        const hasBackyardEl = document.createElement("li");
        hasBackyardEl.innerText = `Has Porch: ${house.hasBackyard}`;
        if (house.hasBackyard) {
            hasBackyardEl.style.color = "green";
        }
        // hoa
        const HOAel = document.createElement("li");
        HOAel.innerText = `Has Homeowner Association: ${house.HOA}`;
        if (house.HOA) {
            HOAel.style.color = "green";
        }
        // monthly hoa
        const moHOAel = document.createElement("li");
        moHOAel.innerText = `Monthly HOA fee: $${house.moHOA}/mo`;

        card.appendChild(houseIdEl);
        card.appendChild(houseAddEl);
        card.appendChild(housePriceEl);77 
        card.appendChild(houseSqFtEl);
        card.appendChild(houseYearBuiltEl);
        card.appendChild(numberOfBedroomsEl);
        card.appendChild(numberOfBathroomsEl);
        card.appendChild(parkingSpaceEl);
        card.appendChild(levelsEl);
        card.appendChild(hasPorchEl);
        card.appendChild(hasBackyardEl);
        card.appendChild(HOAel);
        card.appendChild(moHOAel);

        houseListEl.appendChild(card);
    });
}
