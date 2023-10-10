import { OfferCreatingService } from "../services/Admin/event.service";
import {RESPONSE_MESSAGES,RESPONSE_CODES,} from "../responses/services.responses";
import { Request, Response } from "express";

export class OfferCreatingController{
    static async createOffer(req:Request, res:Response){
        try{
            const value = req.body;

            const existing = await OfferCreatingService.getOfferByName(value.Offer_name);

            if(existing){
                return res.status(RESPONSE_CODES.CONFLICT).json({success:false,message: RESPONSE_MESSAGES.ALREADY_EXIST});
            }

            const newOfferData = value;
            const newOffer = await OfferCreatingService.createOffer(newOfferData);

            return res.status(RESPONSE_CODES.CREATED).json({success:true,message: RESPONSE_MESSAGES.EVENT_CREATED, Offer: newOffer});
        }catch(error){
            console.log(error);
            return res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({success:false,message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
            })   
        }
    }

    static async getOffers(req:Request, res:Response) {
        try {
            const pageNumber = req.query.pageNumber || 1;
            const pageSize = req.query.pageSize|| 10;
    
            const offers = await OfferCreatingService.getOffers(pageNumber, pageSize);
            return res.status(RESPONSE_CODES.SUCCESS).json({success:true,message: RESPONSE_MESSAGES.GET_OFFER,offers});

        } catch (error) {
            return res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({success:false,message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
            })   
        }
    }

    static async deleteOffer(req:Request, res:Response){
        const {Offer_name} = req.body;
        try{

            const offer = await OfferCreatingService.removeOfferByname(Offer_name);
            if(!offer){
                return res.status(RESPONSE_CODES.NOTFOUND).json({success:false,message: RESPONSE_MESSAGES.NOT_FOUND})
            }
            return res.status(RESPONSE_CODES.SUCCESS).json({success:true,message: RESPONSE_MESSAGES.EVENT_DELETE
            })
        }catch(error){
            return res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({success:false,message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR})
        }
    }
}