import Joi from 'joi';

export const offerValidator = (req: any, res:any, next: () => void) => {
    const offerCreate = Joi.object({
        Offer_name: Joi.string().required(), 
        Offer_description: Joi.string().required(),
        Offer_start_date: Joi.date().required(),
        Offer_end_date: Joi.date().required()
    })
    const result = offerCreate.validate(req.body);
    if(result.error){
        res.status(400).send(result.error).json({message: 'Invalid User Input'});
    }else{
        next();
    }
}