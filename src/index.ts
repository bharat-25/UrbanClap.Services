import express from "express";
import {dbConnect} from './database/ServiceConn'
import dotenv from 'dotenv';
import servicesRoute from "./routes/urbanservice.route";
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc'
import offerRoutes from './routes/events.route'
import { OfferCreatingService  } from "./services/Admin/event.service";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
dbConnect();
OfferCreatingService.startOfferReminderCron();
app.use('/service',servicesRoute);
app.use('/offer',offerRoutes)

const swaggerDocument = require("./swagger_output.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
})