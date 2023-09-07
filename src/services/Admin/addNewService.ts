import { ServiceModel } from "../../models/ServiceModel";

/**
 * 
 * @param serviceDataArray 
 * @returns 
 */


export const addNewServices = async (serviceData: any) => {
  try {
      const { name,description, category_id,parent_id } = serviceData;
      
      const existingService = await ServiceModel.findOne({category_id });

      if (existingService) {
        return; 
      }

      const newService = new ServiceModel({
        name,
        description,
        category_id,
        parent_id,
        
      });

      const insertedService = await newService.save();
      return insertedService;

  } catch (error) {
    throw new Error('Error adding new services');
  }
















  // try {
  //   const insertedServices = [];

  //   for (const serviceData of serviceDataArray) {
  //     const { name,description, category_id,parent_id } = serviceData;
      
  //     const existingService = await ServiceModel.findOne({category_id });

  //     if (existingService) {
  //       return; 
  //     }

  //     // Create and save the new service
  //     const newService = new ServiceModel({
  //       name,
  //       description,
  //       category_id,
  //       parent_id,
        
  //     });

  //     const insertedService = await newService.save();
  //     insertedServices.push(insertedService);
  //   }

  //   return insertedServices;
  // } catch (error) {
  //   throw new Error('Error adding new services');
  // }
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