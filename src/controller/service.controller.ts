import { ServiceModel } from '../models/ServiceModel'

// Mock the ServiceModel';
import { Request, Response } from "express";
import { allSalonService } from "../services/userservice/allsalonservice.service";
import { allHomeService } from "../services/userservice/allhomeserv.service";
import { allService } from "../services/userservice/allservice.service";
import { addNewServices } from "../services/Admin/addNewService";
import { addNewPackage } from "../services/Admin/addpackage";
import {RESPONSE_MESSAGES,RESPONSE_CODES,} from "../responses/services.responses";

/**
 * Get all salon services based on category and parent ID.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Response} - The Express response with salon services data or an error message.
 */

export const getAllSalonService = async (req: Request, res: Response) => {
  try {

    const page: any = req.query.page || 1;
    const limit: any = req.query.limit || 10;
    const category_id:any=req.query.category_id;
    const parent_id:any=req.query.parent_id

    const salonServices = await allSalonService(category_id,parent_id,page,limit);

    return res.status(RESPONSE_CODES.SUCCESS).json({ message: RESPONSE_MESSAGES.SHOW_ALL_SERVICES, salonServices });
  } catch (error) {
    console.error(error);
    res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({ message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

/**
 * Get all home services based on category and parent.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Response} - The response containing home services.
 */

export const getAllHomeService = async (req: Request, res: Response) => {
  try {
    const page: any = req.query.page || 1;
    const limit: any = req.query.limit || 10;
    const category_id:any=req.query.category_id;
    const parent_id:any=req.query.parent_id

    const homeServices = await allHomeService(category_id,parent_id,page,limit);

    return res.status(RESPONSE_CODES.SUCCESS).json({ message: RESPONSE_MESSAGES.SHOW_ALL_SERVICES, homeServices });
  } catch (error) {
    console.error(error);
    res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({ message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

/**
 * Get all services with pagination.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Response} - The response containing all services.
 */

export const getAllService = async (req: Request, res: Response) => {
  try {
    
    const page: any = req.query.page || 1;
    const limit: any = req.query.limit || 10;

    const allservices = await allService(page, limit);

    return res.status(RESPONSE_CODES.SUCCESS).json({ message: RESPONSE_MESSAGES.SHOW_ALL_SERVICES, allservices });
  } catch (error) {
    console.error(error);
    res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({ message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

/**
 * Add new service to the system.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Response} - The response indicating success or error.
 */

export const addnewservices = async (req: Request, res: Response) => {
  try {
    const serviceData :any= req.body;

    const insertedService = await addNewServices(serviceData);

    if (insertedService) {
      res.status(RESPONSE_CODES.CREATED).json({
          message: RESPONSE_MESSAGES.SERVICE_ADDED,
          service: insertedService,
        });
    } else {
      res.status(RESPONSE_CODES.CONFLICT).json({ message: RESPONSE_MESSAGES.SERVICE_ALREADY_EXIST });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

/**
 *
 * @param req
 * @param res
 */

export const newPackages = async (req: Request, res: Response) => {
  try {
    const PackageData= req.body;
    const service_package = await addNewPackage(PackageData);

  
  if (service_package) {
    // Successful insertion
    res.status(RESPONSE_CODES.CREATED).json({ message: RESPONSE_MESSAGES.SERVICE_ADDED, service_package });
  } else {
    res.status(RESPONSE_CODES.CONFLICT).json({ message: RESPONSE_MESSAGES.SERVICE_ALREADY_EXIST });
  }
}
     catch (error) {
    res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({ message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};
