const router = require('express').Router();

//rutas
router.get('/',(req,res) =>{
   
    res.render('users/login')


});
router.get('/about',(req,res) =>{
   
    res.render('about')


});
module.exports=router;