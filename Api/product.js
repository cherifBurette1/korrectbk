const express=require('express');
const mongoose=require('mongoose');
const Product=require('../DB/product');
const route= express.Router();
route.post("/",async (req,res)=>{
    const{Title,Category,Description,Tags} = req.body;
    let prod={};
    prod.Title=Title;
    prod.Category=Category;
    prod.Description=Description;
    prod.Tags=Tags;
    let productModel=new Product(prod);
  try{ await productModel.save();
        res.json('added successfully');}catch(err){
            res.json('There is something wrong');
        }
});
route.get("/",async (req,res)=>{
    const products= await Product.find();
    res.json(products);
});
route.delete('/:id',async (req, res) => {
try{const remove=await Product.remove({_id:req.params.id});
res.json({message:'deleted post'});
}catch(err){
res.json({message:err})
}
});
 route.put('/:id', async (req, res) => {
    try{
        const updatedproduct=await Product.updateOne({_id:req.params.id},{$set:{
            _id: req.params.id,
            Title: req.body.Title,
            Category: req.body.Category,
            Description: req.body.Description,
            Tags: req.body.Tags,
        }});
        res.json({message:'updated post'});
    }
        catch
      (error)  {
        res.status(400).json({
          error: error
        });
      }
  }); 

module.exports=route; 