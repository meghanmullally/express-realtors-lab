const apartments = [
    {
        id: 1,
        address: "123 Main St Seattle, WA 12345",
        sqFt: 1200,
        price: 1500,
        isPetFriendly: true,
        bedrooms: 2,
        bathrooms: 1.5,
        parkingSpaces: 1,
        laundry: true,
        swimmingPool: true,
        yearBuilt: 2010,
        hasBalcony: true,
        hasGym: false,
        hasFireplace: false,
        waterfrontView: false,
        hasGarage: false
    },
    {
        id: 2,
        address: "456 Elm St Los Angeles, CA 54321",
        sqFt: 1000,
        price: 1800,
        isPetFriendly: false,
        bedrooms: 1,
        bathrooms: 1,
        parkingSpaces: 0,
        laundry: false,
        gym: true,
        rooftopTerrace: true,
        yearBuilt: 2005,
        hasBalcony: false,
        hasGym: true,
        hasFireplace: false,
        waterfrontView: true,
        hasGarage: false
    },
    {
        id: 3,
        address: "789 Maple Ave San Francisco, CA 67890",
        sqFt: 800,
        price: 6500,
        isPetFriendly: true,
        bedrooms: 1,
        bathrooms: 1,
        parkingSpaces: 1,
        laundry: true,
        parkingGarage: true,
        yearBuilt: 1995,
        hasBalcony: true,
        hasGym: false,
        hasFireplace: true,
        waterfrontView: false,
        hasGarage: true
    },
    {
        id: 4,
        address: "10 Oak St Dallas, TX 45678",
        sqFt: 1500,
        price: 1800,
        isPetFriendly: true,
        bedrooms: 3,
        bathrooms: 2,
        parkingSpaces: 2,
        pool: true,
        fitnessCenter: true,
        laundry: true,
        yearBuilt: 2015,
        hasBalcony: true,
        hasGym: true,
        hasFireplace: true,
        waterfrontView: true,
        hasGarage: false
    },
    {
        id: 5,
        address: "222 Pine St Denver, CO 98765",
        sqFt: 1800,
        price: 2400,
        isPetFriendly: true,
        bedrooms: 2,
        bathrooms: 2,
        parkingSpaces: 2,
        laundry: true,
        fireplace: true,
        mountainView: true,
        yearBuilt: 2008,
        hasBalcony: true,
        hasGym: false,
        hasFireplace: true,
        waterfrontView: false,
        hasGarage: true
    },
    {
        id: 6,
        address: "333 Walnut St New York City, NY 23456",
        sqFt: 1300,
        price: 16000,
        isPetFriendly: true,
        bedrooms: 2,
        bathrooms: 1,
        parkingSpaces: 1,
        laundry: false,
        yearBuilt: 2000,
        hasBalcony: true,
        hasGym: false,
        hasFireplace: false,
        waterfrontView: true,
        hasGarage: false
    },
];


module.exports = {
    getAll: function () {
        return apartments;
    },

    getOne: function (id) {
        return apartments.find((apartment) => apartment.id === parseInt(id));
    }
};
