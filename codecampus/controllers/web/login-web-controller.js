const User = require("../../models/mysql/user-model");
const bcrypt = require("bcrypt");

module.exports = {
  home: async (req, res) => {
    res.render("login/home", { title: "Login" });
  },

  registerUser: async (req, res) => {
    const username = req.body.username;
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      req.session.flash = { type: "danger", message: "username already exist" };

      return res.redirect("/login");
    }

    const passwordHash = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({ username, passwordHash });
    if (user) {
      req.session.flash = { type: "success", message: "User created" };
    }

    res.redirect("/login");
  },
  loginUser: async (req, res) => {
    res.redirect("/profile");
  },
};
