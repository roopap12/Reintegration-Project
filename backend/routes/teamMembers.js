const express = require('express');
const router = express.Router();
const TeamMember = require('../models/TeamMember');

// Get all team members
router.get('/', async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific team member
router.get('/:id', getTeamMember, (req, res) => {
  res.json(res.teamMember);
});

// Create a new team member
router.post('/', async (req, res) => {
  const teamMember = new TeamMember({
    name: req.body.name,
    role: req.body.role,
    email: req.body.email,
    phone: req.body.phone,
    bio: req.body.bio,
  });

  try {
    const newTeamMember = await teamMember.save();
    res.status(201).json(newTeamMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a team member
router.patch('/:id', getTeamMember, async (req, res) => {
  if (req.body.name != null) {
    res.teamMember.name = req.body.name;
  }
  if (req.body.role != null) {
    res.teamMember.role = req.body.role;
  }
  if (req.body.email != null) {
    res.teamMember.email = req.body.email;
  }
  if (req.body.phone != null) {
    res.teamMember.phone = req.body.phone;
  }
  if (req.body.bio != null) {
    res.teamMember.bio = req.body.bio;
  }

  try {
    const updatedTeamMember = await res.teamMember.save();
    res.json(updatedTeamMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a team member
router.delete('/:id', getTeamMember, async (req, res) => {
  try {
    await res.teamMember.remove();
    res.json({ message: 'Deleted team member' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to get a specific team member by ID
async function getTeamMember(req, res, next) {
  let teamMember;
  try {
    teamMember = await TeamMember.findById(req.params.id);
    if (teamMember == null) {
      return res.status(404).json({ message: 'Team member not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.teamMember = teamMember;
  next();
}

module.exports = router;
