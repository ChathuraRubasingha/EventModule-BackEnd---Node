const express = require("express");
const router = express.Router();
const Event = require("../models/eventModel");

const eventCntrl = {
  postevent: async (req, res) => {
    try {
      
      const {title,time,category,pic,duedate,price,breifDescription,fullDescription} = req.body;
      if(!title || !time || !category || !duedate || !price || !breifDescription || !fullDescription||  !pic){
        return res.status(200).json({ error: "filled all fields" });
      }
      const event = new Event({
        title,
        time,
        category,
        price,
        duedate,
        breifDescription,
        fullDescription,
        photo:pic

      })
      await event.save();
      console.log(req.body.pic);
     return  res.status(200).json({ msg: "Event Posted Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  },

  getallevent: async (req, res) => {
    try {
      const events = await Event.find();
      res.send(events);
      console.log(events);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
};

module.exports = eventCntrl;
