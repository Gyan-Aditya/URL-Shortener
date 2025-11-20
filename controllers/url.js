const shortid=require("shortid")
const URL=require("../models/url");
async function handleGenerateNewShortURL(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:'url is required'})
    const shortId=shortid();
    await URL.create({
        shortId:shortId,
        redirectURL:body.url,
        visitHistory:[],
        createdBy:req.user._id,
    });
    // return res.json({Id:shortId});
    return res.render('home',{id: shortId});
}

async function handleGetAnalytics(req,res){
    const shortid=req.params.shortId;
    const result = await URL.findOne({shortid});
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    }); 
}

module.exports={
    handleGenerateNewShortURL,
    handleGetAnalytics,
}