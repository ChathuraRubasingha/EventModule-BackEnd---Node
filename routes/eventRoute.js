const express = require("express");
const router = express.Router();
const eventCntrl = require("../controllers/eventController");

router.post("/postevent", eventCntrl.postevent);
router.get("/getallevents", eventCntrl.getallevent);

// /editevents
// /deleteevents




module.exports = router;
