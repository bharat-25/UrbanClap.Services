import { timeStamp } from "console";
import { Request, Response, NextFunction } from "express";
import Joi, { ObjectSchema } from "joi";
import { RESPONSE_MESSAGES, RESPONSE_CODES } from "../responses/services.responses";



const newServiceValid = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    category_id:Joi.number(),
    parent_id:Joi.string()
  });

  const newsubServiceValid = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    price:Joi.number(),
    parent_id:Joi.string()
  });
  
  
  const validatedata = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error, value } = schema.validate(req.body);
      if (error) {
        return res.status(RESPONSE_CODES.BADREQUEST).json({ message: error.details[0].message });
      }
      req.body = value;
      next();
    };
  };
  
  export const NewServiceValidation = validatedata(newServiceValid);
  export const NewSub_ServiceValidation = validatedata(newsubServiceValid);
