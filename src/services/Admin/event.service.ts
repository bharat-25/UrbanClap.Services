import OfferModel from '../../models/offer.model'
import cron from 'node-cron'; 
import { UserData} from '../../models/UserModel';
import { sendStylzedMail } from '../email.service'; 
import { offerTemplateClass } from '../../templates/offers.template';

export class OfferCreatingService{
    static async getOfferByName(Offer_name:any){
        return OfferModel.findOne({Offer_name:Offer_name});
    }

    static async createOffer(OfferData: any){
        return OfferModel.insertMany(OfferData);
    }
    
    static async removeOfferByname(Offer_name:any){
        return OfferModel.deleteOne({ Offer_name: Offer_name });
    }

    static async checkOfferExistance(offerId:any){
        try{
            const offer = await OfferModel.findById(offerId);
            return offer !== null;
        }catch(error){
            console.error("Error checking offer existance: ", error);
            throw error;
        }
    }

    static async getOffers(page: any, pageSize: any) {
        const skip = (page - 1) * pageSize;
    
        const offers = await OfferModel.find()
          .skip(skip)
          .limit(pageSize);
        return offers;
      }

      static async startOfferReminderCron() {
                cron.schedule('*/10 * * * * *', async () => {

        // cron.schedule('0 8 * * *', async () => {
          console.log('Running offer reminder cron job...');
    
          try {
            const overdueoffers = await OfferModel.find({
              Offer_start_date: {
                $gte: new Date(),
                $lt: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // One week in the future
              },
            });                

            for (const offer of overdueoffers) {
                // Fetch user emails from the User model
                const users = await UserData.find();
                // Generate the email template using the modified class
                console.log(offer);
                const emailText = offerTemplateClass.makeOffer(offer);
                // Send emails to all users
                for (const user of users) {
                    await sendStylzedMail(user.email, 'Invitation', emailText);
                    console.log("email sent successfully");
                }
            }
    
            console.log('Offer reminder cron job completed.');
            } catch (error) {
                console.error('Error sending offer reminders:', error);
            }
        });
}
}