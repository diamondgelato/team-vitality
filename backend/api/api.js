const express = require ('express');
const router = express.Router();
const bodyparser = require("body-parser");

var schemas = require("../Schema");
var User = schemas.user;
var Expense = schemas.expense;
var Group = schemas.group;

router.get('/users',(req, res, next) => {
    console.log(typeof(User));
    User.find({"username": "test"}).exec().then((users) => {
        res.send(users);
    }).catch(next);
    // res.send({type: 'GET'});
});

router.post("/users", (req, res, next) => {
    User.create(req.body).then((user) => {
        res.send ({
            // type: "POST",
            // name: req.body.name,
            // email: req.body.email
            user
        });
    }).catch(next);
});

router.put("/users/:id", (req, res) => {
    User.findOneAndUpdate({"_id": req.params.id}, req.body).then((user) => {
        User.findOne({"_id": req.params.id}).then((user) => {
            res.send ({
                // type: "PUT",
                // id: req.body.id
                user
            });
        });
    });
});

router.delete("/users/:id", (req, res) => {
    User.findOneAndDelete({_id: req.params.id}).then(function(user){
        res.send(user);
    });

    // res.send ({
    //     type: 'DELETE',
    //     id: req.body.id
    // })
})

module.exports = router;