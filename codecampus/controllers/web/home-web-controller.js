const LearningPath = require("../../models/learning-path-model");

module.exports = {
  home: async (req, res) => {
    const learningPaths = await LearningPath.find().lean();

    if (learningPaths.length === 0) {
      const learningPath1 = new LearningPath({
        title: "Learn PYTHON program",
        description:
          "This course will provide you those programming tools by which you will make a project with the basic of python programming ",
        estimatedHours: 8,
        steps: [
          "Watch video 1: Link",
          "Assignment 1: Link",
          "Watch video 2: Link",
          "Assignment 2: Link",
          "Watch video 3: Link",
          "Assignment 3: Link",
        ],
      });
      const learningPath2 = new LearningPath({
        title: "Learn Advance PYTHON program",
        description:
          "This course will provide you those programming tools by which you will make a project with the advance of python programming ",
        estimatedHours: 16,
        steps: [
          "Watch video 1: Link",
          "Assignment 1: Link",
          "Watch video 2: Link",
          "Assignment 2: Link",
          "Watch video 3: Link",
          "Assignment 3: Link",
        ],
      });
      learningPath1.save();
      learningPath2.save();
    }
    res.render("index", { title: "CodeCampus Start", learningPaths });
  },
};
