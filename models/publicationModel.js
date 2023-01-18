const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date:{
    type:Date,
    // required:true,
  },
  client: [{ type: mongoose.Schema.Types.ObjectId, ref: 'clients' },{ type: mongoose.Schema.Types.String, ref: 'clients' }]
});

const publication = mongoose.model("Publication", publicationSchema);

module.exports = publication;