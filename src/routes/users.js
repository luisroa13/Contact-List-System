const router = require('express').Router();

router.get('/users/login',(req,res) =>{
   
    res.render('users/login');
})

router.get('/users/signup',(req,res) =>{
   
    res.render('users/signup');
})
router.get('/users/forgot',(req,res) =>{
   
    res.render('users/forgot');
})

module.exports=router;