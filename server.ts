import express from "express";
import {dbConnect} from './src/database/ServiceConn'
import dotenv from 'dotenv';
import servicesRoute from "./src/routes/urbanservice.route";
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc'

dotenv.config();

const options:swaggerJSDoc.Options ={
    definition:{
        openapi:'3.0.0',
        info:{
            title:"Urban Clap",
            version:"1.0.0"
        },
        schema:["http","https"],
        server:[
            {
                url:"http://localhost:5001/"
            },
        ]
    },
    apis: ['./swagger/*'],
};
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
dbConnect();
app.use('/',servicesRoute);


const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
})