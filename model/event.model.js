const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    events: [
      {
        description: { type: String, required: true },
        image: { type: String, required: true },
        Date: { type: String, required: true, default: new Date() },
      },
    ],
  },
  {
    versionKey: false,
  }
);

const EventModel = mongoose.model("event", EventSchema);

module.exports = {
    EventModel
};
