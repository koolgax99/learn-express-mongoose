var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: {type:String},
    ISBN: {type: String},
    genre: { type: [Schema.Types.ObjectId], ref: 'Genre', required: true},
    url: {type: String}
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);
