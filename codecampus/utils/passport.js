const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/mysql/user-model");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return done("Incorrect username or password", false);
    }
    const passwordMatch = await user.validatePassword(password);
    if (!passwordMatch) {
      return done("Incorrect username or password", false);
    }
    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.userId);
});

passport.deserializeUser(async (userId, done) => {
  const user = await User.findOne({ where: { userId } });
  done(null, user);
});

const requireAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.flash = {
    type: "danger",
    text: "You have to login for seeing that page",
  };

  res.redirect("/login");
};

const setUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.user = req.user.dataValues;
  }
  next();
};

module.exports = {
  passport,
  requireAuth,
  setUser,
};
