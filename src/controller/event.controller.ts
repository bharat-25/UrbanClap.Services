import { EventCreatingService } from "../services/Admin/event.service";
import {
    RESPONSE_MESSAGES,
    RESPONSE_CODES,
  } from "../responses/services.responses";
import { Request, Response } from "express";

export class EventCreatingController{
    static async createEvent(req:Request, res:Response){
        try{
            const value = req.body;

            const existingEvent = await EventCreatingService.getEventByName(value.Event_name);

            if(existingEvent){
                return res.status(RESPONSE_CODES.CONFLICT).json({
                    message: RESPONSE_MESSAGES.ALREADY_EXIST
                });
            }

            const newEventData = value;
            
            const newEvent = await EventCreatingService.createEvent(newEventData);

            return res.status(RESPONSE_CODES.CREATED).json({
                message: RESPONSE_MESSAGES.EVENT_CREATED, Event: newEvent
            });
        }catch(error){
            return res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
                message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
            })   
        }
    }

    static async getEvents(req:Request, res:Response) {
        try {
            const pageNumber = req.query.pageNumber || 1;
            const pageSize = req.query.pageSize|| 10;
    
            const events = await EventCreatingService.getEvents(pageNumber, pageSize);
            return res.status(200).json(events);
        } catch (error) {
            return res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
                message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
            })   
        }
    }
    static async deleteEvent(req:Request, res:Response){
        const {Event_name} = req.body;
        try{

            const event = await EventCreatingService.removeEventByname(Event_name);
            if(!event){
                return res.status(RESPONSE_CODES.NOTFOUND).json({
                    message: RESPONSE_MESSAGES.NOT_FOUND
                })
            }

            return res.status(RESPONSE_CODES.SUCCESS).json({
                message: RESPONSE_MESSAGES.EVENT_DELETE
            })
        }catch(error){
            return res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
                message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
            })
        }
    }
}