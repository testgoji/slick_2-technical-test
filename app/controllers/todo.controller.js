var Todo = require('../models/todo.model.js');

exports.create = function(req, res) {
    // Create and Save a new Todo
    if(!req.body.title) {
        return res.status(400).send({message: "Task can not be empty"});
    }

    var todo = new Todo({title: req.body.title, complete: false});

    todo.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Todo."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all todos from the database.
    Todo.find(function(err, todos){
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving todos."});
        } else {
            res.send(todos);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single task with a todoId
    Todo.findById(req.params.todoId, function(err, todo) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Todo not found with id " + req.params.todoId});                
            }
            return res.status(500).send({message: "Error retrieving todo with id " + req.params.todoId});
        } 

        if(!todo) {
            return res.status(404).send({message: "Todo not found with id " + req.params.todoId});            
        }

        res.send(todo);
    });
};

exports.update = function(req, res) {
    // Update a todo identified by the todoId in the request
    Todo.findById(req.params.todoId, function(err, todo) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Todo not found with id " + req.params.todoId});                
            }

            return res.status(500).send({message: "Error finding todo with id " + req.params.todoId});
        }

        if(!todo) {
            return res.status(404).send({message: "Todo not found with id " + req.params.todoId});            
        }

        todo.title = req.body.title;
        todo.complete = req.body.complete;

        todo.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update todo with id " + req.params.todoId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a todo with the specified todoId in the request
    Todo.findByIdAndRemove(req.params.todoId, function(err, todo) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Todo not found with id " + req.params.todoId});                
            }
            return res.status(500).send({message: "Could not delete todo with id " + req.params.todoId});
        }

        if(!todo) {
            return res.status(404).send({message: "Todo not found with id " + req.params.todoId});
        }

        res.send({message: "Todo deleted successfully!"})
    });
};
