
import { PackageModel } from "../../models/PackageModel";

export const Pack_Atlas=async (name:any)=> {
  try {
    // console.log(name)
    const pipeline = [
      {
        $search: {
          index: "Package-search",
          text: { query: name.name, path: "name",
        //   synonyms:"nameSynonyms",
          fuzzy: {
            maxEdits: 1,
            prefixLength: 1,
        },
          },
          highlight: {
            "path": "name",
          }
        }
      },
      {
        $limit:6
      },
      
        {
          $project: {
            name: 1,
            score: { $meta: "searchScore" },
            highlights:{$meta:"searchHighlights"}
          },
      },
    ];
    const matchResult = await PackageModel.aggregate(pipeline);
    console.log(matchResult)
    return matchResult;
  } catch (e) {
    throw new Error(e.message);
  }
}
