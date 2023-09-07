import { offerValidator } from "../middleware/event.validator";
import { OfferCreatingController } from "../controller/event.controller";
import express from 'express'
import { verifyAdmin } from "../middleware/verifyAdminToken";
// import { verifyUser } from "../middlewares/users.auth";
// import { verifyAdminOrUser } from "../middlewares/verifyAdminOrUser";

const router = express.Router();
router.post('/create',verifyAdmin, offerValidator, OfferCreatingController.createOffer);
router.get('/getOffers', verifyAdmin, OfferCreatingController.getOffers);
router.delete('/deleteOffers', verifyAdmin, OfferCreatingController.deleteOffer);

export default router;