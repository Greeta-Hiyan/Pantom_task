const {vegetableColl} = require('./db')

const vegetable = function(app){
    this.app = app
}

module.exports = vegetable;


vegetable.prototype.register = async(req,res)=>{
    let veg = new vegetableColl(req.body)

    try{
        await veg.save();
        res.json({status : true, message : "Vegetable created successfully", result : veg})
    }catch(err){
        res.json({status : false, message : "Error to create vegetable", result : err})
    }
}