const express = require("express");
const router = express.Router();
const apartmentsController = require("../controllers/apartments");


router.get("/", apartmentsController.index);
router.get("/:id", apartmentsController.show);



module.exports = router;
