const express = require('express');
const Recipe = require('../models/recipe');

const router = express.Router();

// 🔹 Get all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        console.error("Error fetching all recipes:", err); // Added logging
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Get a single recipe by ID
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(recipe);
    } catch (err) {
        console.error("Error fetching recipe:", err); // Added logging
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Create a new recipe
router.post('/', async (req, res) => {
    try {
        const { title, ingredients, instructions, imageUrl } = req.body;
        const newRecipe = new Recipe({ title, ingredients, instructions, imageUrl });
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (err) {
        console.error("Error creating recipe:", err); // Added logging
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Update a recipe
router.put('/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(updatedRecipe);
    } catch (err) {
        console.error("Error updating recipe:", err); // Added logging
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Delete a recipe
router.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json({ message: 'Recipe deleted' });
    } catch (err) {
        console.error("Error deleting recipe:", err); // Added logging
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
