import { eventValidator } from "../middleware/event.validator";
import { EventCreatingController } from "../controller/event.controller";
import express from 'express'
import { verifyAdmin } from "../middleware/verifyAdminToken";
// import { verifyUser } from "../middlewares/users.auth";
// import { verifyAdminOrUser } from "../middlewares/verifyAdminOrUser";

const router = express.Router();
router.post('/create',verifyAdmin, eventValidator, EventCreatingController.createEvent);
router.get('/getEvents', verifyAdmin, EventCreatingController.getEvents);
router.delete('/deleteEvents', verifyAdmin, EventCreatingController.deleteEvent);

export default router;