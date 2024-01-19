// This provides controller functions for creating, retrieving, updating, 
// and deleting team members. You can follow a similar structure for the other controllers.

const TeamMember = require('../models/TeamMember');

// Controller to create a new team member
exports.createTeamMember = async (req, res) => {
  try {
    const newTeamMember = await TeamMember.create(req.body);
    res.status(201).json(newTeamMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get all team members
exports.getAllTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get a team member by ID
exports.getTeamMemberById = async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);
    if (!teamMember) {
      res.status(404).json({ message: 'Team member not found' });
      return;
    }
    res.status(200).json(teamMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update a team member by ID
exports.updateTeamMember = async (req, res) => {
  try {
    const updatedTeamMember = await TeamMember.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTeamMember) {
      res.status(404).json({ message: 'Team member not found' });
      return;
    }
    res.status(200).json(updatedTeamMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a team member by ID
exports.deleteTeamMember = async (req, res) => {
  try {
    const deletedTeamMember = await TeamMember.findByIdAndDelete(req.params.id);
    if (!deletedTeamMember) {
      res.status(404).json({ message: 'Team member not found' });
      return;
    }
    res.status(200).json(deletedTeamMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
