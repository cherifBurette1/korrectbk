const express = require('express');
const connectDB=require('./DB/connection');
const app = express();  
const cors=require('cors');
connectDB();
app.use(cors());
app.options('*', cors());
app.use(express.json({extended:false}));
app.use('/api/productModel',require('./Api/product'));
const Port= process.env.PORT || 3000;

app.listen(Port, ()=> console.log('on 3000')) 
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
      console.log('💥 Process terminated!');
    });
  });