import EventModel from '../../models/event.model'
import cron from 'node-cron';
import { Op } from 'sequelize'; 
import { UserData} from '../../models/UserModel';
import { sendStylzedMail } from '../email.service'; 
import { eventTemplateClass } from '../../templates/events.template';

export class EventCreatingService{
    static async getEventByName(Event_name:any){
        return EventModel.findOne({where: {Event_name}});
    }

    static async createEvent(eventData:any){
        return EventModel.create(eventData);
    }
    
    static async removeEventByname(Event_name:any){
        return EventModel.deleteOne({ where: {Event_name} } );
    }

    static async checkEventExistance(eventId:any){
        try{
            const event = await EventModel.findById(eventId);
            return event !== null;
        }catch(error){
            console.error("Error checking event existance: ", error);
            throw error;
        }
    }

    static async getEvents(page: number, pageSize: number) {
        const skip = (page - 1) * pageSize;
    
        const events = await EventModel.find()
          .skip(skip)
          .limit(pageSize);
        return events;
      }

      static async startEventReminderCron() {
        cron.schedule('0 8 * * *', async () => {
          console.log('Running event reminder cron job...');
    
          try {
            const overdueEvents = await EventModel.find({
              Event_date: {
                $gte: new Date(),
                $lt: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // One week in the future
              },
            });                

            for (const event of overdueEvents) {
                // Fetch user emails from the User model
                const users = await UserData.find();
                // Generate the email template using the modified class
                const emailText = eventTemplateClass.makeEvent(event);
                // Send emails to all users
                for (const user of users) {
                    await sendStylzedMail(user.email, 'Invitation', emailText);
                    console.log("email sent successfully");
                }
            }
    
            console.log('Event reminder cron job completed.');
            } catch (error) {
                console.error('Error sending event reminders:', error);
            }
        });
}
}