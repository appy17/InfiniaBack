const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
  {
    imgSrc: {type:String, required:true},
    title: {type:String, required:true},
    description: {type:String, required:true},
  },
  {
    versionKey: false,
  }
);

const EventModel = mongoose.model("event", EventSchema);

module.exports = {
    EventModel
};
