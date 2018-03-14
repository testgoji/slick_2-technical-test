module.exports = function(app) {

    var todos = require('../controllers/todo.controller.js');

    // Create a new Todo
    app.post('/slick/todos', todos.create);

    // Retrieve all Todos
    app.get('/slick/todos', todos.findAll);

    // Retrieve a single Todo with todoId
    app.get('/slick/todos/:todoId', todos.findOne);

    // Update a Todo with todoId
    app.put('/slick/todos/:todoId', todos.update);

    // Delete a Todo with todoId
    app.delete('/slick/todos/:todoId', todos.delete);
}
