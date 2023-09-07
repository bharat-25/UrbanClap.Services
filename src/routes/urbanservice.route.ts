import express from 'express';
import {getAllSalonService,getAllService,addnewservices,getAllHomeService,newPackages} from '../controller/service.controller';
import { verifyAdmin } from '../middleware/verifyAdminToken';

const servicesRoute = express.Router();

servicesRoute.route('/').get();
// servicesRoute.route('/salonServices').get(getAllSalonService);
servicesRoute.route('/salonServices').get(getAllSalonService);
servicesRoute.route('/homeServices').get(getAllHomeService);
servicesRoute.route('/getallservice').get(getAllService);
servicesRoute.route('/addnewService').post(verifyAdmin,addnewservices);
servicesRoute.route('/NewPackages').post(verifyAdmin,newPackages);

export default servicesRoute;