import express from 'express';
import {getAllSalonService,getAllService,addnewservices,getAllHomeService,newPackages} from '../controller/service.controller';
import { verifyAdmin } from '../middleware/verifyAdminToken';
import  {Package_Atlas_search, Service_Atlas_search } from '../controller/atlas.controller';

const servicesRoute = express.Router();

servicesRoute.route('/').get();

servicesRoute.route('/salonServices').get(getAllSalonService);
servicesRoute.route('/homeServices').get(getAllHomeService);
servicesRoute.route('/getallservice').get(getAllService);
servicesRoute.route('/addnewService').post(verifyAdmin,addnewservices);
servicesRoute.route('/NewPackages').post(verifyAdmin,newPackages);
servicesRoute.route('/searching/:name').get(Service_Atlas_search);
servicesRoute.route('/Package/searching/:name').get(Package_Atlas_search);

export default servicesRoute;