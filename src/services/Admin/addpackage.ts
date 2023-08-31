import { PackageModel } from "../../models/PackageModel";

/**
 * 
 * @param newPackageData 
 * @returns 
 */

export const addNewPackage = async (newPackageData:any) => {

  try {
    const insertedServices = [];
    for (const serviceData of newPackageData) {
      const { name,description, category_id,parent_id,price } = serviceData;

      const existingService = await PackageModel.findOne({category_id });

      if (existingService) {
        return; // Skip this service and move to the next one
      }

      // Create and save the new service
      const newService = new PackageModel({
        name,
        description,
        category_id,
        parent_id,
        price
      });

      const insertedService = await newService.save();
      insertedServices.push(insertedService);
      // console.log(insertedService)
    }
    return insertedServices;
  }
    catch (error) {
    throw new Error('Error adding new services');
};















//     try {
//         const existingService = await PackageModel.findOne(PackageData.category_id);
    
//         if (existingService) {
//           return;
//         } 
//           const insertedData = await PackageModel.insertMany(PackageData);
//           console.log("Service Package data to be inserted:", PackageData);
    
//           return insertedData;
        
//       } catch (error) {
//         // console.error("Error inserting service data:", error);
//         throw new Error("Error adding new service details");
//       }
}
