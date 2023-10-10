import { RESPONSE_CODES, RESPONSE_MESSAGES } from "../responses/services.responses";
import { Atlas } from "../services/userservice/atlas-service";
import { Request, Response } from "express";
import { Pack_Atlas } from "../services/userservice/packageSearch";


//Search the services
/**
 * 
 * @param req service name
 * @param res get all service
 */
export const Service_Atlas_search = async (req: Request, res: Response) => {
    try {
      const name:any= req.params;
      const Search = await Atlas(name);
      res.status(RESPONSE_CODES.CREATED).json({success:true, message: RESPONSE_MESSAGES.RESULT, Search });
  }
       catch (error) {
      res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({success:false, message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR });
    }
  };


  //Search the package
  /**
   * 
   * @param req name: package name
   * @param res 
   */

  export const Package_Atlas_search = async (req: Request, res: Response) => {
    try {
      const name:any= req.params;
      const Search = await Pack_Atlas(name);
      res.status(RESPONSE_CODES.CREATED).json({success:true, message: RESPONSE_MESSAGES.RESULT, Search });
  }
       catch (error) {
      res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({success:false, message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR });
    }
  };