const UserDataworker = {};
const connection = require('../ultil/dbconnection');
const User = require('../models/User');

UserDataworker.getUsers = async (user) => {
    try {
        await connection();
        const users = await User.find(user);
        return users;
    } catch (error) {
        throw error;
    }
}

UserDataworker.checkUser = async (username,email) => {
    try {
        await connection();
        const user = await User.findOne({$or:[{username: username}, {email: email}]});
        return user;
    } catch (error) {
        throw error;
    }
}

UserDataworker.getUser = async (username, password) => {
    try {
        await connection();
        const user = await User.findOne({username: username, password: password});
        return user;
    } catch (error) {
        throw error;
    }
}

UserDataworker.create = async (user) => {
    try {
        await connection();
        const newUser = await User.create(user);
        return newUser;
    } catch (error) {
        throw error;
    }
}

module.exports = UserDataworker;


