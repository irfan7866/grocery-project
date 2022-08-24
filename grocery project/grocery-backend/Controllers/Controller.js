const userModel = require('../Models/Users')
const bcrypt = require('bcrypt')
const products = require('../Models/Products')
const Cart = require('../Models/Cart')

exports.testApi = (req , res) => {
    res.status(401).send("<h1>I have changed the method</h1>")
}


exports.register = (req ,res) => {
    res.send(`
        <html>
        <body>
            <form method='POST' action='/user/get_data'>
                <div class="form-group">
                    <label for="exampleInputName">Name</label>
                    <input type="text"
                    name="name" class="form-control" id="exampleInputName" placeholder="Enter name">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email"
                    name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </body>
        </html>
    `)
}



exports.getRegData = (req ,res) => {

    bcrypt.genSalt(10 , (err , salt)=>{
        if(err){
            res.status(403).send({err : "something went wrong in salt generation"})
        } else {
            bcrypt.hash(req.body.password , salt , (err , hash)=>{
                if(err){
                    res.status(403).send({err : "something went wrong in salt generation"})
                } else {
                    userModel.insertMany({name : req.body.name , email : req.body.email , password : hash}).then((result)=>{
                        res.status(200).send({msg : "user registered successfully"})
                    }).catch((err)=>{
                        res.status(403).send({err : "something went wrong"})
                    })
                }
            })
        }
    })

}

exports.userLogin = (req ,res) => {
    userModel.find({"email" : req.body.email}).then((result) =>{
        if(result.length === 0){
            res.status(403).send({err : "user not found"})
        } else {
            bcrypt.compare(req.body.password , result[0].password , (err , status)=>{
                if(err){
                    res.status(403).send({err : "something went wrong"})
                } else {
                    if(status === true){
                        res.status(200).send({msg : "user login successfully" , id : result[0]._id})
                    } else {
                        res.status(403).send({err : "incorrect password"})
                    }
                }
            })
        }
    }).catch((err)=>{
        res.status(403).send({err : "something went wrong"})
    })
}


exports.addProduct = (req , res) => {
    products.insertMany({
        p_name : req.body.p_name ,
        p_price : req.body.p_price ,
        p_cat : req.body.p_cat ,
        p_desc : req.body.p_desc ,
        p_image : req.body.p_image ,
        avl_quantity : req.body.avl_quantity
    }).then((result)=>{
        console.log(result)
        res.status(200).send({msg : "Product added successfully"})
    }).catch((err)=>{
        console.log(err)
        res.status(400).send({err : "something went wrong"})
    })
}


exports.getAllProducts = (req , res) => {
    products.find({}).then((result) => {
        res.status(200).send(result)
    }).catch((err) =>{
        res.status(400).send({msg : "something went wrong"})
    })
}



exports.addToCart = (req , res) => {
    
    Cart.insertMany({u_id : req.body.u_id , p_data : req.body.p_data}).then((result)=>{
        res.status(200).send({msg : "Item added to Cart"})
    }).catch((err)=>{
        res.status(400).send({msg : "Something went wrong"})
    })

}

exports.getCartItems = (req , res) => {
    
    Cart.find({u_id : req.query.u_id}).then((result)=>{

        
        res.status(200).send({data : result , count : result.length})

    }).catch((err)=>{
        res.status(400).send({msg : "Something went wrong"})
    })

}
