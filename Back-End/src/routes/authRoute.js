const { Router } = require("express");
const router = Router();
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");
const googleAuthController = require("../controllers/googleAuthController");

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/google", googleAuthController);

module.exports = router;
