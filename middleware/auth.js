const {getUser}=require("../service/auth")

async function restrictToLoggedinUserOnly(req,res,next){
    // console.log(req.headers);
    // const userUid= req.headers["authorization"];
    // const userUid=req.cookies?.uid;
    const token=req.cookies?.token;
    
    if(!token) return res.redirect('/login');
    // const token=userUid.split("Bearer ")[1];
    const user=getUser(token);
    // const user=getUser(token);
    
    if(!user) return res.redirect('/login');
    req.user=user;
    next();
}

async function checkAuth(req,res,next){
    // const userUid= req.headers["authorization"];
    console.log(req.headers);
    const token=req.cookies?.token;
    if(!token){
        req.user=null;
        return next();
    }
    // const userUid=req.cookies?.uid;
    // const token=userUid.split("Bearer ")[1];
    // const user=getUser(userUid);
    const user=getUser(token);
    req.user=user;
    next();
}

module.exports={
    restrictToLoggedinUserOnly,
    checkAuth,
}