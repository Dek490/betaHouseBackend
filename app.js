const express=require('express')
const mongoose=require('mongoose')
// var createError = require('http-errors');
// const { MongoMemoryServer } =require('mongodb-memory-server');
require('dotenv').config()
const app=express()
app.use(express.json());
// connecting to mongodb server
mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://xasancumar:1zhHPp6abdOhvt1k@cluster0.d4o1wlf.mongodb.net/betaHOUSE')
  .then(() => {
    app.listen(process.env.Port,()=>{
      console.log('listening on port',process.env.Port)
  })
    // console.log('started and Connected!')
  }).catch((er)=>{
    console.log("errors",er)
  });


//connecting to MongoMemoryServer
// const connectDB=async()=>{

// const mongoServer = await MongoMemoryServer.create();


//   await mongoose.connect(mongoServer.getUri(), { dbName: "betaHouse" });
//   await console.log('connected to the db')
// }
// connectDB()
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//mesha u ka kacayo
app.get('/',(req,res)=>{
    res.json('api Waa uu shqeynaa ')
})

//routes
const userRoute=require('./routes/user-route')
const houseRoute=require('./routes/house-route')
const contactRoute=require('./routes/contact-route')
const serviceRoute=require('./routes/service-route')
const ourClientRoute=require('./routes/ourclient-route')
const homesSettingRoute=require('./routes/homesSetting-route')
const galleryRoute=require('./routes/gallery-route')
const aboutRoute=require('./routes/about-route')
const imageRoute=require('./routes/image-route')
const loginRoute=require('./routes/login-route');
const AuthernticateRoute  = require('./routes/AuthernicationMiddleWare')
// /users  xagaan   userRoute
app.use('/users',AuthernticateRoute(["Admin"]),userRoute)
app.use('/houses',houseRoute)

app.use('/service',AuthernticateRoute(["CustomerCare","Admin"]),serviceRoute)
app.use('/client',ourClientRoute)
app.use('/homeSetting',homesSettingRoute)
app.use('/gallery',galleryRoute)
app.use('/contact',contactRoute)
app.use('/images',imageRoute)

app.use('/about',aboutRoute)
app.use('/login',loginRoute)











//listing on port


module.exports=app