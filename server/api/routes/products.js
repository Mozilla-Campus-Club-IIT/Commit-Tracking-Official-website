const express= require('express');
const router= express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message : "Handling GET request for /products "
    });   
});

router.get('/example', (req, res, next) => {
    res.send('Hello');
});

router.get('/:prodId',(req,res,next)=>{

    const prodId=req.params.prodId;

    res.status(200).json({
        "message" : "Handling GET request for /products:prodId",
        prodId: prodId
    });   
});

router.post('/',(req,res,next)=>{
    const product={
        "name":req.body.name,
        "price":req.body.price
    }
    res.status(200).json({
        message : "Handling POST request for /products ",
        createdProduct: product
    });   
});

module.exports=router;