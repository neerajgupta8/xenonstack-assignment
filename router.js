import express from "express"
import User from "./userSchema.js"

const userRouter = express.Router();


userRouter.post("/register", async function (req, res) {
    try {
        const userExists = await User.findOne({ Email: req.body.email });
        if (userExists) {
            res.status(404).send("Email already registered");
        }
        const user = await User({
            Name: req.body.name,
            Email: req.body.email,
            Password: req.body.password,
        });
        await user.save();
        res.status(200).send("User Registered");
    } catch (error) {
        res.status(500).send(`Server Error`);
    }
});

userRouter.post("/login", async function (req, res) {
    try {
        const user = await User.findOne({ Email: req.body.email });

        if (user) {
            if (req.body.password === user.Password) {
                res.status(200).send(user);

            } else {
                res.status(401).send('Incorrect Password');
            }
        }
        else {
            res.status(401).send('User Not Registered');
        }
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

export default userRouter;