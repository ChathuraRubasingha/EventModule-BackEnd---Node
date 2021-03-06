const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const eventschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    duedate: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },

    breifDescription: {
      type: String,
      required: true,
    },

    fullDescription: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },

    eventappliedcandaitedIds: {
      type: [],
      required: true,
    },
    postedBy: {
      type: mongoose.Types.ObjectId,
      ref: "Company",
    },
  },

  {
    timestamps: true,
  }
);

const eventModel = new mongoose.model("Event", eventschema);
module.exports = eventModel;
