import { ServiceModel } from "../../models/ServiceModel";
/**
 * 
 * @param category_id 
 * @param parent_id 
 * @param page 
 * @param limit 
 * @returns 
 */
export const allHomeService = async (category_id: number,parent_id: number,page:number,limit:number) => {
  try {
    const totalItems = await ServiceModel.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    const skip = (page - 1) * limit;
    const salonServices = await ServiceModel.find({
      $or: [{ category_id }, { parent_id }],
    }).skip(skip).limit(limit).exec();
    return {
      salonServices,
      totalPages,
      currentPage: page,
      totalItems,
    };
  } catch (error) {
    throw new Error("Error fetching salon services");
  }
};

