const mongoose = require('mongoose')

const ingredientSchema= new mongooseSchema({
    name: {
        type: String,
        required: true,
    },
});

const ingredient= mongoose.model("Ingredient", ingredientSchema);
module.exports = Ingredient; 