const mongoose = require('mongoose');

////message Schema
const messageSchema = mongoose.Schema({
    sender:{
        type: String,
        required: true
    },
    reciver:  {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    time: {
        type:Date,
        default:Date.now
    }
});

//Message Model
const Message = mongoose.model('Message', messageSchema);
const messageSenders = function (callback){
    Message.aggregate([
        {
            $lookup:
       {
           from: 'users',
           localField: 'sender',
           foreignField: 'userName',
           as: 'senderInfo'
       }
        }
    ], function (err, data) {
        if (err) {
            throw err;
            callback(err, null);
        }
        
        callback(null, data);
    });
};
module.exports.Message = Message;
