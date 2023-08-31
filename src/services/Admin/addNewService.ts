// import { ServicesData } from "../../ServicesData/ServicesData";
import { log } from "console";
import { ServiceModel } from "../../models/ServiceModel";

/**
 * 
 * @param serviceDataArray 
 * @returns 
 */


export const addNewServices = async (serviceDataArray: any) => {
  try {
    const insertedServices = [];

    for (const serviceData of serviceDataArray) {
      const { name,description, category_id,parent_id } = serviceData;

      // Check if a service with the same category_id already exists
      const existingService = await ServiceModel.findOne({category_id });

      if (existingService) {
        return; // Skip this service and move to the next one
      }

      // Create and save the new service
      const newService = new ServiceModel({
        name,
        description,
        category_id,
        parent_id,
        
      });

      const insertedService = await newService.save();
      insertedServices.push(insertedService);
    }

    return insertedServices;
  } catch (error) {
    throw new Error('Error adding new services');
  }
}

//     try {
//               const { name,description, category_id,parent_id } = serviceDataArray;
    
//     const existingService = await ServiceModel.findOne({category_id:serviceDataArray[3]});
//     console.log("llllllllllllllllllllllll",existingService)
//     if (!existingService) {
//         const insertedData = await ServiceModel.insertMany(serviceDataArray);
//         console.log("Service Package data to be inserted:", serviceDataArray);
//         return insertedData;
//     } 
//     return 
//     }
//  catch (error) {
//       // console.error("Error inserting service data:", error);
//       throw new Error("Error adding new service details");
// };