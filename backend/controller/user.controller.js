const { model } = require('mongoose')
const userModel = require('../Model/User.Model')


const register = async (req ,res) => {
    console.log(req.body)
    const { name,mail,pass} = req.body

    
    try {
        //checkif the user is already exist
        const user = await userModel.findOne({mail: mail});
        if (user){
            return res.status(400).json({message: "user already exist"})
        }
        const newUser = new userModel({
            userName:name,
            email:mail,
            password:pass            
        });
        await newUser.save();

        console.log("user registered successfully" , newUser)
        return res.status(201).json({status: "success" , message: "user registered successfully"});

    } catch (err) {
        console.log("Error checking or registering user", err);
        return res.status(500).json({message: "Error checking or registering", error:err})
    }

}




    const login = async (req, res) => {
        console.log("Logging in user...", req.body);
    
        const { mail, pass } = req.body;
    
        try {
        const user = await userModel.findOne({ email: mail }); // use correct field name
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
    
        if (user.password !== pass) {
            return res.status(401).json({ message: "Incorrect password" });
        }
    
        console.log("User logged in successfully:", user);
        return res.status(200).json({ status: "success", message: "Login successful", user });

    
        } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Login failed", error: err });
        }
    };
module.exports ={register , login} 