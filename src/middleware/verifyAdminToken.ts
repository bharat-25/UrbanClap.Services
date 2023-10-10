import axios from "axios";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { RESPONSE_MESSAGES, RESPONSE_CODES } from "../responses/services.responses";

// let sc = <string> process.env.secretKey
/**
 * Verifies if the user is an admin by checking the JWT token.
 * If the user is an admin, calls the next middleware function.
 * If the user is not an admin or there is an error verifying the token, throws an error.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next middleware function.
 * @returns {void}
 */

export const verifyAdmin = async (req: Request,res: Response,next: NextFunction) => {
  const AccessKeys = "MySecretKey";
  const RefreshKeys = "myrefreshtoken";

  try {
    
    const Token = req.headers.authorization?.replace('Bearer ','');

    if (!Token) {
      return res.status(RESPONSE_CODES.UNAUTHORIZED).json({ message: RESPONSE_MESSAGES.NOT_FOUND});
    }
      console.log("IN ACCESS BLOCK TOKEN");
      const decodedAccessToken: any = jwt.verify(Token, AccessKeys)
      console.log(decodedAccessToken)
      const isadmin = decodedAccessToken.isAdmin;
      if (isadmin == true) {
        console.log("ADMIN")
        next();
      }else{
       res.status(404).json({ message: "Access Denied!, You are not Admin" });
      }
    } 
    catch (error) {
      res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({ message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR });
    }
  


//   try {

//     const token = req.headers.authorization;
//   const response = await axios.post("http://localhost:5000/verify_token",{token});
//   // if (!token) {
//   //   return res.status(401).json({ message: "Token missing" });
//   // }
//   //   const decodedToken: any = jwt.verify(token, "MySecretKey");
//   //   if (decodedToken.isAdmin) {
//   //     next(); // Admin verified, proceed to the next controller
//   //   } else {
//     if (response.data && response.data.isAdmin) {
//       next();
//     }  else {
//       return res.send("Admin authorization required" );
//     }
//   } catch (err) {
//     res.send("UNAUTHORIZED" );
//   }
// }
  }