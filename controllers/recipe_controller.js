const Recipe = require('../models/recipe')

module.exports = {
    test(req, res) {
        res.send({ hi: 'there' });
    },
    create(req, res) {
        const recipeProps = req.body;

        Recipe.create(recipeProps)
            .then(recipe => res.send(recipe))
    },
    index(req, res) {
        Recipe.find({})
            .then(recipes => res.send(recipes))
    },
    delete(req, res, next) {
        const id = req.params.id;

        Recipe.findByIdAndRemove({ _id: id })
            .then(recipe => res.send(recipe))
            .catch(next)
    },
    edit(req, res, next) {
        const id = req.params.id;
        const recipeProps = req.body;

        Recipe.findOneAndUpdate({ _id: id }, recipeProps)
            .then(() => Recipe.findById({ _id: id}))
            .then(recipe => res.send(recipe))
            .catch(next)
    }

}