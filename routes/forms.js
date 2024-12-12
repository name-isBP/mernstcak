const express = require('express');
const mongoose = require('mongoose');
const Form = require('../models/Form');
const router = express.Router();

// Route to create a new form
router.post('/create', async (req, res) => {
  const { formTitle, headerImage, questions } = req.body;

  try {
    const form = new Form({
      formTitle,
      headerImage,
      questions
    });
    
    await form.save();
    res.status(201).json({ message: 'Form created successfully', form });
  } catch (error) {
    res.status(500).json({ message: 'Error creating form', error });
  }
});

// Route to get a form by ID (for preview)
router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching form', error });
  }
});

module.exports = router;
