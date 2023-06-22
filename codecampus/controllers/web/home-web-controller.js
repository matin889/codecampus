const LearningPath = require("../../models/mongodb/learning-path-model");

module.exports = {
  home: async (req, res) => {
    const learningPaths = await LearningPath.find().lean();

    // res.session.flash = { type: "success", message: "Welcome to CodeCampus" };
    res.render("home", { title: "CodeCampus Start", learningPaths });
  },
};
