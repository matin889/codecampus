var express = require("express");
var router = express.Router();
const controller = require("../../controllers/web/login-web-controller");
const { passport } = require("../../utils/passport");

/* GET home page. */
router.get("/", controller.home);
router.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/" }),
  controller.loginUser
);

router.post("/register", controller.registerUser);

module.exports = router;
