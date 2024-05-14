const Apartment = require("../models/apartments");

module.exports = {
    index,
    show
}

function index(req, res) {
    const apartments = Apartment.getAll();
    res.json(apartments)
}

function show(req, res) {
    const apartment = Apartment.getOne(req.params.id);
    console.log('id req.params.id', req.params.id)
    res.json(apartment || { message: "Data not found" });
  }