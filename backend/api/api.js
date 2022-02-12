const express = require ('express');
const router = express.Router();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

var schemas = require("../Schema");
var User = schemas.user;
var Expense = schemas.expense;
var Group = schemas.group;
var Fraction = schemas.fraction;

// Base APIs
router.get('/users',(req, res, next) => {
    // console.log(typeof(User));
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
});

// Add expense for a user
    // format for req.body (in postman)
    // amount: Number,
    // name: String,
    // date: Date, ("YYYY-MM-DD")
    // user_who_added: userID from mongo,
    // recurring: Boolean,
    // expected: Boolean,
    // users: [fractionSchema]
router.post("/addexpense/:id", (req, res, next) => {
    // get data
    let userWhoAddedFrac = 1;
    let fractions = [];

    console.log(req.body);
    // console.log(typeof(req.body.users));

    for (let i = 0; i < req.body.users.length; i++) {
        const user = new Fraction ({
            "user": mongoose.Types.ObjectId(req.body.users[i].user),
            "fraction": parseFloat(req.body.users[i].fraction)
        });

        fractions.push(user);
        userWhoAddedFrac -= parseFloat(req.body.users[i].fraction);
    }

    fractions.push({
        "user": mongoose.Types.ObjectId(req.params.id),
        "fraction": userWhoAddedFrac
    })

    let expense = new Expense ({
        "amount": req.body.amount,
        "name": req.body.name,
        "date": req.body.date,
        "user_who_added": mongoose.Types.ObjectId(req.params.id),
        "recurring": req.body.recurring,
        "expected": req.body.expected,
        "users": fractions
    });

    // add final model object to db
    expense.save((err, expense) => {
        res.send(expense);
    });
});

// list all expenses for a user 
router.get("/allexpenses/:id", (req, res, next) => {
    User.find({"_id": req.params.id}).exec().then((users) => {
        res.send(users.expense_document);
    }).catch(next);
    // res.send({type: 'GET'});
});

// list all friends names of a user


// list all groups


// for each user: 
// - total balance
// - user owed and owing

module.exports = router;