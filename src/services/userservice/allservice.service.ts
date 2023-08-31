import {ServiceModel} from "../../models/ServiceModel";

/**
 * 
 * @param page 
 * @param limit 
 * @returns 
 */

export const allService = async (page:number,limit:number) => {
  try {
    const totalItems = await ServiceModel.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    const skip = (page - 1) * limit;
    const salonServices = await ServiceModel.find().skip(skip).limit(limit);

    return({
      salonServices,
      totalPages,
      currentPage: page,
      totalItems
    });
  } catch (error) {
    throw new Error('Error fetching salon services');
  }
};