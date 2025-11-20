// State-Full authentication
// const sessionIdToUserMap=new Map();

// function setUser(id,user){
//     sessionIdToUserMap.set(id,user);
// }

// function getUser(id){
//     return sessionIdToUserMap.get(id);
// }


//State-less authentication using JWT
const jwt=require("jsonwebtoken");
const secret="gyan@$2903";

function setUser(user){
    return jwt.sign(
        { //This part is the payload which we want to encode inside the token and it consist data of user
        _id: user._id,
        email: user.email,
        },
        secret
    );
}

function getUser(token){
    console.log(token);
    if(!token){
        return null;
    }
    try{
        return jwt.verify(token,secret); 
    }catch(error){
        console.log(error);
    }
}


module.exports={
    setUser,
    getUser,
}