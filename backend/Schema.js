const mongoose = require('mongoose');

// make connection to db
mongoose.connect('mongodb://localhost:27017/vitalityDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fractionSchema = new mongoose.Schema({
    // userSchema
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "No user specified"]
    },
    fraction: {
        type: mongoose.Decimal128,
        required: true
    }
});

const Fraction = mongoose.model ("Fraction", fractionSchema);

// expense schema
const expenseSchema = new mongoose.Schema({
    amount: Number,
    name: String,
    date: Date,
    user_who_added: mongoose.Schema.Types.ObjectId,
    recurring: {
        type: Boolean,
        default: false
    },
    expected: {
        type: Boolean,
        default: false
    },
    users: [fractionSchema]
});

const Expense = mongoose.model ("Expense", expenseSchema);

// user schema
const userSchema = new mongoose.Schema ({
    username: String,
    email: String,

    // expenseSchema
    expense_document: [mongoose.Schema.Types.ObjectId],

    // userSchema
    friends: [mongoose.Schema.Types.ObjectId],
});

const User = mongoose.model ("User", userSchema);

// group schema
const groupSchema = new mongoose.Schema({
    groupname: String,

    // userSchema
    user_document: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true
    },

    // expenseSchema
    expense_document: [mongoose.Schema.Types.ObjectId],
});

const Group = mongoose.model ("Group", groupSchema);

// test document
let user1 = new User ({
    username: "test",
    email: "test@test.com",
    expense_document: [],
    friends: []
});

// user1.save();

let user2 = new User ({
    username: "test",
    email: "test@test.com",
    expense_document: [],
    friends: [user1]
});

// user2.save();

// console.log("Saved 2 users");

module.exports = {
    'expense': Expense,
    'user': User,
    'group': Group,
    'fraction': Fraction
};