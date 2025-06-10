const Project = require("../model/project");

const CreateProject = async (req, res) => {
  try {
    const {
      projectName,
      projectManager,
      timeDuration,
      startDate,
      endDate,
      Budget,
      status,
    } = req.body;
    console.log(
      projectName,
      projectManager,
      timeDuration,
      startDate,
      endDate,
      Budget,
      status
    );
    const project = await Project.findOne({ projectName });

    if (project) {
      return res.status(400).json({ message: "Project already exists" });
    }
    const newProject = new Project({
      projectName,
      projectManager,
      timeDuration,
      startDate,
      endDate,
      Budget,
      status,
    });
    await newProject.save();
    res.status(201).json({ message: "Project created successfully" });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: 500,
    });
  }
};
// get all projects
const getAllProjects = async (req, res) => {
  try {
    const Projects = await Project.find();
    res.status(200).json({
      Projects,
      status: 200,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch Projects", error: err });
  }
};
// get single project
const getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ message: "project not found" });
    }

    res.status(200).json({
      project,
      status: 200,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch the project", error: err });
  }
};
const editProject = async (req, res) => {
  const { id } = req.params;
  const {
    projectName,
    projectManager,
    timeDuration,
    startDate,
    endDate,
    Budget,
    status,
  } = req.body;
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        projectName,
        projectManager,
        timeDuration,
        startDate,
        endDate,
        Budget,
        status,
      },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res
      .status(200)
      .json({ message: "Project updated successfully", updatedProject });
  } catch (err) {
    res.status(500).json({ message: "Failed to update project", error: err });
  }
};
const deleteProject = async (req, res) => {
  const { id } = req.params; 

  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res
      .status(200)
      .json({ message: "Project deleted successfully", deletedProject });
  } catch (err) {

    res.status(500).json({ message: "Failed to delete Project", error: err });
  }
};
module.exports = {
  CreateProject,
  getAllProjects,
  getProjectById,
editProject ,
  deleteProject

};
