const { CustomerColl } = require('./db');
const vegetable = require('./db')

const Customer = function (app) {
    this.app = app;
}

module.exports = Customer;



Customer.prototype.register = async function (req, res) {
    let customerDt = new CustomerColl(req.body)
    try {
        await customerDt.save();
        res.json({ status: true, message: "Customer created successfully", result: customerDt })
    } catch (error) {
        res.json({ status: false, message: error })
    }
}

Customer.prototype.getCust = async function (req, res) {

    try {
        let result = await CustomerColl.updateMany({}, { $inc: { count: 1 } })
        // let result = await CustomerColl.updateOne({ "_id": req.body._id },{$set : {is_active : false}},{upsert:true});
        res.json({ status: true, message: "Customer created successfully", result: result })
    } catch (error) {
        res.json({ status: false, message: error })
    }
}