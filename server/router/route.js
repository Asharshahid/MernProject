import {Router} from "express";
const router = Router()
import * as controller from "../controller/controller.js"
import middleware from "../middleware/middleware.js";


// ###########################   POST METHOD   #########################


// Register user
router.post("/register", controller.register)
// Login user
router.post("/login", controller.login)
// Login user
router.get("/logout", controller.logout)
// create post
router.post("/post",middleware, controller.createpost)
// ##########################   GET METHOD  #############################
router.get("/getallpost", controller.getallpost)
router.get("/getpost/:id", controller.getpost)
// ##########################   PUT METHOD  ##############################
router.put("/updatepost/:id",middleware, controller.updatepost)
// ########################## DELETE METHOD ##############################
router.delete("/deletepost/:id",middleware, controller.deletepost)



export default router;