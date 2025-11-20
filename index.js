const express=require("express");
const mongoose=require("mongoose");
const URL=require('./models/url.js')
const path=require("path");
const cookieParser=require("cookie-parser");
const urlRoute=require("./routes/url");
const staticRoute=require("./routes/staticRouter.js");
const userRoute=require("./routes/user");
const {restrictToLoggedinUserOnly,checkAuth}=require("./middleware/auth");
const {connectToMongoDb}=require("./connection.js");
const app=express();
const PORT=8001; 

connectToMongoDb("").then(()=>{console.log("MongoDb connected")}).catch(()=>{console.log("Database not connected")});

app.set("view engine","ejs"); 
app.set("views", path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/url', restrictToLoggedinUserOnly, urlRoute);
app.use('/user', userRoute);
app.use('/', checkAuth, staticRoute);

app.get('/url/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
    console.log('redirect request shortId=', shortId);
    const entry = await URL.findOneAndUpdate(
        { shortId },         
        { $push: { visitHistory: { timestamp: Date.now() } } });
    console.log('DB findOneAndUpdate returned:', entry);
    if (!entry) return res.status(404).send('Short URL not found');
    // return res.redirect(entry.redirectURL);
    const target = /^https?:\/\//i.test(entry.redirectURL) ? entry.redirectURL : 'http://' + entry.redirectURL;
return res.redirect(target);
});
app.listen(PORT,()=>{console.log(`Server started at PORT:${PORT}`)})

