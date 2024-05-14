const houses = [
    {
        id: 1,
        address: '4750 25th Avenue SW, Seattle, WA 98106',
        numberOfBedrooms: 2,
        numberOfBathrooms: 2,
        levels: 2,
        parkingSpaces: 1,
        sqFt: 854,
        yearBuilt: 2024,
        hasPorch: true,
        hasBackyard: true,
        HOA: true,
        moHOA: 10,
        price: 599000,
    },
    {
        id: 2,
        address: '34 Boulder Vw, Irvine, CA 92603',
        numberOfBedrooms: 7,
        numberOfBathrooms: 10,
        levels: 3,
        parkingSpaces: 16,
        sqFt: 9202,
        yearBuilt: 2008,
        hasPorch: true,
        hasPool: true,
        hasBackyard: true,
        HOA: true,
        moHOA: 750,
        price: 21995000,
    },
    {
        id: 3,
        address: '1129 W 2nd St, Santa Ana, CA 92703',
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        levels: 2,
        parkingSpaces: 1,
        sqFt: 920,
        yearBuilt: 1900,
        hasPorch: true,
        hasBackyard: true,
        HOA: false,
        moHOA: null,
        price: 529000,
    },
    {
        id: 4,
        address: '6211 Bentwood Trl, Dallas, TX 75252',
        numberOfBedrooms: 4,
        numberOfBathrooms: 3,
        levels: 2,
        parkingSpaces: 2,
        sqFt: 2365,
        yearBuilt: 1993,
        hasPorch: true,
        hasBackyard: true,
        hasPool: true,
        HOA: true,
        moHOA: 44,
        price: 519900,
    },
    {
        id: 5,
        address: '1939 Berwick Ave, Dallas, TX 75203',
        numberOfBedrooms: 5,
        numberOfBathrooms: 4,
        levels: 2,
        parkingSpaces: 2,
        sqFt: 3007,
        yearBuilt: 2024,
        hasPorch: true,
        hasBackyard: true,
        HOA: false,
        moHOA: null,
        price: 599000,
    },
    {
        id: 6,
        address: '25 Riverside Dr, New York, NY 10023',
        numberOfBedrooms: 8,
        numberOfBathrooms: 9,
        levels: 3,
        parkingSpaces: 1,
        sqFt: 12000,
        yearBuilt: 1910,
        hasPorch: true,
        hasBackyard: false,
        waterfrontView: true,
        HOA: false,
        moHOA: null,
        price: 55000000,
    },
]

module.exports = {
    getAll: function () {
        return houses;
    },

    getOne: function (id) {
        return houses.find((house) => house.id === parseInt(id));
    }
};
