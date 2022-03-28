const UserController = {}
const UserDataworker = require('../dataworkers/UserDataworker');
// import dbConnect from '../ultil/mongodb';
// const dbConnect = require('../ultil/mongodb');


UserController.getUsers = async (req, res) =>  {
    const users = await UserDataworker.getUsers();
    res.status(200).json(users);
}

const checkUser = async ( username, email ) => {
    try{
        const user = await UserDataworker.checkUser(username, email);
        if(user){
            if(user?.username === username && user?.email === email)
                return {error: 'Username and Email is not available'};   //
            if(user?.username === username && user?.email !== email)
                return {error: 'Username is not available'};
            if(user?.username !== username && user?.email === email)
                return {error: 'Email is not available'};
        }
        return true;
            
    }catch(error){
        return null;
    }
}

UserController.login = async (req, res) => {
    try{
        const { username, password } = req.body;
        const user = await UserDataworker.getUser(username, password);
        if(user)
            res.status(200).json({response: user});
        else
            res.status(200).json({error: 'Usuario o contraseña incorrecto'});
    }   catch(error){
        console.log(error)
        res.status(500).json('Internal Server Error');
    }
}

UserController.register = async (req, res) => {
    try {
        const user = {
            fullname: req.body.fullname ,
            username: req.body.username,
            email: req.body.email ,
            password: req.body.password,
            country:  req.body.country ,
            
        }

        const empty_values = is_empty_values(user);
        if(empty_values){
           return res.status(200).json({error: `${empty_values.charAt(0).toUpperCase() + empty_values.slice(1)} is empty`});
        }
        const user_available = await checkUser(user.username, user.email);
        if(user_available !== true)
            res.status(200).json(user_available);
        else{
            const user_created = await UserDataworker.create(user);
            if(user_created)
                return res.status(200).json({response: user_created});
            return res.status(500).json('Internal Server Error');
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal Server Error');
        
    }
}

const is_empty_values = (data) => {
    let empty_values = false;
    for(let key in data){
        if(data[key] === ''){
          return key;
        }
    }
    return false;
}

module.exports = UserController;