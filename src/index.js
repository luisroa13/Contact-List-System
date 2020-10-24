const express=require('express');
const app=express();
const path=require('path');
const bodyParser = require("body-parser");
const exhtml=require('express-handlebars');
const methodOverride=require('method-override');
const session=require('express-session');
const IndexRoutes=require('./routes/index');
const UsersRoutes=require('./routes/users');
const NotesRoutes=require('./routes/valData.js');
const mongoose=require('mongoose');
//Initializations
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Contact-list-app',
{

    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(db =>console.log('DB is connected'))
.catch(err =>console.log(err));
const bdc=mongoose.connection;
bdc.once('open',()=>{
    console.log("connection on")
})

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
secret:'mysecretapp',
resave:true,
saveUninitialized:true

}))
// settings
app.set('port',process.env.PORT|| 3000);
app.set('views');
app.set('views',path.join(__dirname,"views"));
app.engine('.html',exhtml(
    {
defaultLayout: 'main',
layoutsDir:path.join(app.get('views'),'layouts'),
partialsDir:path.join(app.get('views'),'partials'),
extname:'.html'

    }));
    app.set('view engine','html');

    app.use(bodyParser.json());
//Global variables

//Routes
app.use(IndexRoutes);
app.use(UsersRoutes);
app.use(NotesRoutes);
//Static Files
app.use(express.static(path.join(__dirname,'public')));
//Server
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});
