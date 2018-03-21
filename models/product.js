var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
       type: String,
       trim: true,
       required: 'Name required',
      
  },
  discription: {
       type: String,
       trim: true,
       default:'',
       
  },
  price: {
  
      type: Number,
      trim: true,
      required: 'Price required',
     
  },
  quantity: {
      type: Number,
      trim: true,
      required: 'Quantity required',
  },
  create: {
      type: Date,
      default: Date.now
  }

}

var product = mongoose.model('Product', ProductSchema, 'product');
module.exports =Product;
