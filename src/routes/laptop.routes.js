const express=require('express');
const router=express.Router();
const laptopcontroller=require('../controllers/laptop.controller');
//retrive all Laptop
router.get('/',laptopcontroller.findAll);
//Create new laptop
router.post('/',laptopcontroller.create);
//Retrive a single laptop with id 
router.get('/:id',laptopcontroller.findById);
//Update a laptop with id
router.put('/:id',laptopcontroller.update);
//delete a laptop with id
router.delete('/:id',laptopcontroller.delete);
module.exports=router;