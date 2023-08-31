import Joi from 'joi';

export const eventValidator = (req: any, res:any, next: () => void) => {
    const eventCreate = Joi.object({
        Event_name: Joi.string().required(), 
        Event_description: Joi.string().required(),
        Event_start_date: Joi.date().required(),
        Event_end_dress: Joi.date().required()
    })
    const result = eventCreate.validate(req.body);
    if(result.error){
        res.status(400).send(result.error).json({message: 'Invalid User Input'});
    }else{
        next();
    }
}