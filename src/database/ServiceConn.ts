import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { logger } from "../logger/error.controller";
const url =process.env.DB_CONNECTION_URL;


// const dbConnect = async ()=> {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/UrbanClap")
//         mongoose.set({debug:true})
//         console.log('Connected to MongoDB');
//     }
//     catch (error) {
//         console.error('Error connecting to MongoDB', error);
//     };
// }
// export {dbConnect};

export const dbConnect = async () => { 
     try {  
        console.log(process.env.DB_CONNECTION_URL) 
         await mongoose.connect(`${process.env.DB_CONNECTION_URL}`);    
         mongoose.set({debug:true})    
         logger.log({level:"info",message:`Succesfully connected to the db`}); 
         } 
         catch (e) 
         {    
            logger.log({level:"error",message:"ERRRRRR"});  
        }
    };