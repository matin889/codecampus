const User = require("../../models/mysql/user-model");

module.exports = {
  home: async (req, res) => {
    res.render("profile/home", { title: "Your Profile" });
  },
};
