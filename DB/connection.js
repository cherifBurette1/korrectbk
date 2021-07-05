const mongoose=require('mongoose');
const URI="mongodb+srv://cherif:Ab12345@cluster0.9llmu.mongodb.net/korrect?retryWrites=true&w=majority";
const connectDB= async()=>{
    await mongoose.connect(URI,{useNewUrlParser: true ,useUnifiedTopology: true});
    console.log('db connected');
}
module.exports=connectDB;
