const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    u_id : {
        type : String ,
        required : true ,
    } ,
    p_data : {
        type : Object ,
        required : true ,
    }
})

const Cart = mongoose.model("Cart" , CartSchema)

module.exports = Cart;