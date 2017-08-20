  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  gtrSchema = new Schema({
    color: {
      type: String,
      required: !0
    },
    year: {
      type: Number,
      required: !0
    },
    make: {
      type: String,
      required: !0
    },
    model: {
      type: String,
      required: !0
    },
    price: {
      type: Number,
      required: !1
    }
  }),

  gtrCollection = mongoose.model('gtrCollection', gtrSchema);
  module.exports = gtrCollection;
