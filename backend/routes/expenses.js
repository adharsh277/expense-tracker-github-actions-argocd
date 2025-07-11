const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Add a new expense
router.post('/add-expense', async (req, res) => {
  try {
    const { title, amount } = req.body;
    const expense = new Expense({ title, amount });
    await expense.save();
    res.status(201).json({ message: 'Expense added successfully', expense });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add expense' });
  }
});

// Get all expenses
router.get('/get-expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
});

module.exports = router;
