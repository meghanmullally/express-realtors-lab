const express = require("express");
const router = express.Router();
const housesController = require("../controllers/houses");


router.get("/", housesController.index);
router.get("/:id", housesController.show);



module.exports = router;
