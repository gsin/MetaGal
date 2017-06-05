const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  name: String,
  description: String,
  status: Number,
}, { timestamps: true });


const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
