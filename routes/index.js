const express = require('express');
const router = express.Router();
require('../data/dataBase');
const productModel = require('../model/product')


/* GET ALL */
router.get('/', function(req, res, next) {
  productModel.find({},(err,data)=>{
    if(err){
      console.log('err from find');
        console.log(err)
    }
    else{
      res.send(data)
    }
  })
});

router.get('/:id',function(req,res,next){
  productModel.find({id:req.params.id}, (err,data) =>{
    if(err){
      console.log('err from id');
      console.log(err)
    }
    else{
      res.send(data)
    }
  })
});
router.get('/:category',function(req,res,next){
  productModel.find({category:req.params.category}, (err,data) =>{
    if(err){
      console.log('err from category');
      console.log(err)
    }
    else{
      res.send(data)
    }
  })
});



/* post home page. */

router.post('/', (req,res,next) => {
  const newProduct = new productModel ({
    id: req.body.id,
    name: req.body.name,
    description:req.body.description,
    weight:req.body.weight,
    price:req.body.price,
    pic:req.body.pic,
    type:req.body.type

  });


  newProduct.save().then( () => console.log(`prudect ${req.body.name} saved`));
  next();
  
});

/* put home page. */

router.put('/', (req,res) => {
    var query = {price:req.body.oldprice};
    productModel.findOneAndUpdate(query,{$set: { price: req.body.newprice }} , (err,doc) =>{
      if(err){
        console.log('err from put');
        console.log(err);
      }
      else{
        console.log(doc)
      }
    } )
 } );

 /* put home page. */

 router.delete('/' , (req,res) => {
  productModel.findOneAndDelete({id: req.body.id},(err) =>{
    if(err){
      console.log(err)
    }
    else{
      console.log(`product: ${req.body.name} is deleted!`)
    }
  });
  next();
});


module.exports = router;
