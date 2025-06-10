const express = require("express");
const {
  CreateProject,
  getAllProjects,
  getProjectById,
  editProject,
  deleteProject,
} = require("../controller/project");
const router = express.Router();

router.post("/newProject", CreateProject);
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.put("/:id", editProject);
router.delete("/:id", deleteProject);
module.exports = router;
