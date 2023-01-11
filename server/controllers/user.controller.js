const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const SECRET = process.env.SECRET


module.exports = {
    registerUser: (req, res) => {
        const {firstName, lastName, email, password} = req.body
        const newUser = User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: newUser._id, email
            }, SECRET);
            res.status(201).cookie("userToken", userToken, {
                httpOnly: true,expires: new Date(Date.now() + 90000)})
                .json({successMessage: 'User registered', newUser: newUser})
            })
        .catch(err => res.json(err));
    },
    loginUser:async (req, res)=> {
        const userInDB = await User.findOne({email:req.body.email})
        if(!userInDB) {
            res.status(400).json({error: "Invalid email/password combination"})
        }
        try {
            const isPasswordValid = await bcrypt.compare(req.body.password, userInDB.password)
            console.log(isPasswordValid)
            if(!isPasswordValid) {
                res.status(400).json({error: "Invalid email/password combination"})
            }else {
                const userToken = jwt.sign({_id: userInDB._id, email:userInDB.email}, SECRET)
                res.status(201).cookie('userToken', userToken, {httpOnly:true, 
                    expires: new Date(Date.now() + 90000)}).json({successMessage: 'User logged in', userInDB: userInDB})
            }
        }catch(err) {
            res.status(400).json({error: "Invalid email/password combination"})
        }
    },
    logoutUser: (req, res)=> {
        res.clearCookie('userToken')
        res.json({success: 'User logged out'})
    }
}



