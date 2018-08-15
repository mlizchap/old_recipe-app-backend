const controller = require('../controllers/recipe_controller');

module.exports = (app) => {
    app.get('/', controller.test);
    app.get('/api', controller.index);
    app.post('/api/new', controller.create);
    app.delete('/api/:id', controller.delete);
    app.put('/api/:id', controller.edit)
}