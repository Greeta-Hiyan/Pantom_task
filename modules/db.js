const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Restarunt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const customerSchema = {
    name: {
        type: String, required: true
    },
    email: {
        type: String
    },
    age: {
        type: Number, default: 0
    },
    is_active: {
        type: Boolean, default: true
    },
    count : Number
}

const CustomerColl = mongoose.model("customerDetails", customerSchema)

const vegetableSchema = {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    is_Available: {
        type: Boolean, default: false
    },
    created_by: {
        type: Date,
        default: new Date()
    }
}

const vegetableColl = mongoose.model("vegetable", vegetableSchema)
module.exports = { CustomerColl, vegetableColl }