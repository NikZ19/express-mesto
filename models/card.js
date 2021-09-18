const mongoose = require('mongoose');
const { isURL } = require('validator');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return isURL(v);
      },
      message: 'Некорректная URL-ссылка.',
    },
  },
  owner: {
    type: mongoose.ObjectId,
    required: true,
  },
  likes: [{
    type: Array,
    default: [],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
