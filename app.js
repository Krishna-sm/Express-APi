const express= require('express');
const app=express();
const port=process.env.PORT || 5000;
require('dotenv').config();
const connectDB=require('./db/connect')
const DataModel=require('./models/product')
const router=require('./routes/products');
const ProductData=require('./products.json');
app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.use("/api/products",router);



const start=async()=>{
    try{
       await  connectDB(process.env.MONGODB_URI);
     await  DataModel.deleteMany();
    await DataModel.create(ProductData);

        app.listen(port,()=>{
            console.log(`the port is listen at ${port}`)
        })
    }
    catch(error){
            console.log("erroor found"+error.message)
    }
}
start();