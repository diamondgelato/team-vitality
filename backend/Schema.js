const mongoose = require('mongoose');

// make connection to db
mongoose.connect('mongodb://localhost:27017/vitalityDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fractionSchema = new mongoose.Schema({
    // userSchema
    user: mongoose.Schema.Types.ObjectId,
    fraction: mongoose.Decimal128
});

// expense schema
const expenseSchema = new mongoose.Schema({
    amount: Number,
    name: String,
    date: Date,
    user_who_added: String,
    recurring: Boolean,
    expected: Boolean,
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
    user_document: [mongoose.Schema.Types.ObjectId],

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