var express = require('express');
var router = express.Router();
var Product = require('./Models/Product');

router.get("/products",async(req,res)=>{   //products endpoint
    const iproduct = await Product.find()
    res.send(iproduct)
})

router.post("/products",async(req,res)=>{    //products endpoint
    const ip = new Product({
        name:req.body.name,
        price:req.body.price
    });

    await ip.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                message:msg
            })
        }
    })
});

// for update data

router.patch('/products/:id',async (req,res)=>{
    const iproduct = await Product.findOne({_id:req.params.id})
    iproduct.name = req.body.name
    iproduct.price = req.body.price
    await iproduct.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

// for delete data

router.delete("/products/:name",async(req,res)=>{
    const iproduct = await Product.deleteOne({name:req.params.name})
        if(iproduct.deletedCount==1)
        {
            res.status(200).json({
                "Message":iproduct
            })
        }
        else{
            res.status(500).json({
                "Error":iproduct
            })
        }
    })

module.exports = router