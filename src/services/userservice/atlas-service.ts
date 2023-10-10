import {ServiceModel} from "../../models/ServiceModel";
import { PackageModel } from "../../models/PackageModel";

export const Atlas=async (name:any)=> {
  try {
    console.log(name)
    const pipeline = [
      {
        $search: {
          index: "Service-name",
          text: { query: name.name, path: "name" ,
          fuzzy: {
            maxEdits: 1,
            // maxExpansions: 10,
            prefixLength:1
          }
        },
        }
      },{
        $limit:6
      },
        {
          $project: {
            name: 1,
            score: { $meta: "searchScore" }
          },
      },
    ];
    const matchResult = await ServiceModel.aggregate(pipeline);
    console.log(matchResult)
    return matchResult;
  } catch (e) {
    throw new Error(e.message);
  }
}
