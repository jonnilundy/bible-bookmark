'use strict';

var mongoose = require('mongoose');

var Message = mongoose.model('Messages');

exports.list_all_messages = function (req, res) {
    Message.find({}, (err, msg) => {
        if(err) res.send(err);
        res.json(msg);
    });
}

exports.create_a_message = function (req, res) {
    let new_message = new Message(req.body);
    new_message.save()
    Message.find({}, (err, msg) => {
        if (err) res.send(err);
        res.json(msg);
    });
}

exports.read_a_message = function (req, res) {
    Message.findById(req.params.msgId, (err, msg) => {
        if (err) res.send(err);
        res.json(msg);
    })
}

exports.update_a_message =  function (req, res) {
    Message.findOneAndUpdate({_id: req.params.msgId}, req.body, {new: true}, (err, msg) => {
        if (err) res.send(err);
        res.json(msg);
    })
}

exports.delete_a_message = function(req, res) {
    Message.remove({_id: req.params.msgId}, (err, msg) => {
        if(err) res.send(err);
        res.json({message: "Message successfully deleted!"});
    })
}