const {v4:uuidv4}=require("uuid")
const User=require("../models/user")
const {setUser}=require("../service/auth");


async function handleUserSignup(req,res){
    const {name,email,password}=req.body;
    try{
            await User.create({
            name,email,password,
            });
        return res.render("home");
    }catch(err){
        return res.render("signup",{
            error: "User already exists with this email",
        });
    }
};
async function handleUserLogin(req,res){
    const {email,password}=req.body;
    const user=await User.findOne({email,password});
    if(!user) return res.render("login2",{
        error:"Invalid Username or password",
    });
    // const sessionId=uuidv4(); //State-full 
    // setUser(sessionId,user);
    // res.cookie('uid',sessionId);
    const token=setUser(user);
    res.cookie("token", token);
    return res.redirect("/");
};

module.exports={
    handleUserSignup,
    handleUserLogin,
};