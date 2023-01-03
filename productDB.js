require('dotenv').config();
const connectDB=require('./db/connect')
const DataModel=require('./models/product')

const ProductData=require('./products.json');


const start=async()=>{
        try{
                await connectDB(process.env.MONGODB_URI);
                await DataModel.create(ProductData);
                console.log('successs');

        }
        catch(error ){
                    console.log(error)
        }
}

start();