const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: String
})

const RecipeSchema = new Schema({
    title: String,
    picture: String,
    ingredients: [IngredientSchema],
    description: String
});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;