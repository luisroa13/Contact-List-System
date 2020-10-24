const router = require('express').Router();
const model=require('../models/log');
const transporter=require('../helpers/sendMail');

//Routes

router.post('/valData/Signin',(req,res)=>{
const emailusr=req.body.email;
const pwd=req.body.passw;
const name='luis'
const usr=new model({});
usr.email=emailusr;
usr.password=pwd;
usr.name=name;

res.send(usr);
});

//Signup
router.post('/valData/Signup', async (req,res)=>{
    const newmail=req.body.nemail;
    const newpwd=req.body.npassw;
    const newname=req.body.usrn
    const newlname=req.body.usrln
    const newusr=new model({});
    newusr.email=newmail;
    newusr.password=newpwd;
    newusr.name=newname;
    newusr.lname=newlname;
    await newusr.save();
    const message='We send you a confirmation email';
    const confirmation='Hello '+newname+' '+newlname+'¨.Please confirm your account, enter to next link: http://localhost:3000/users/login'
    var mailOptions = {
        from: 'salomondrin222@gmail.com',
        to: newusr.email,
        subject: 'Confirmation email',
        text: confirmation
 };
 transporter.sendMail(mailOptions, (err,info)=>{
    if (err) {
      console.log(err);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
    res.send(message);
    
    });

//forgot password
    router.post('/valData/forgot',(req,res)=>{
        const emailusr=req.body.email;
        const pwd=req.body.npass;
        
        const usr=new model({});
        usr.email=emailusr;
        usr.password=pwd;
  
        
        res.send(usr);
        });

module.exports=router;