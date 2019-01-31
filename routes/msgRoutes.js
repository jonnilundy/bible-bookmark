'use strict';
var messages = require('../controllers/msgController')

module.exports = function(app) {
    app.route('/messages')
        .get(messages.list_all_messages)
        .post(messages.create_a_message)

    app.route('/messages/:msgId')
        .get(messages.read_a_message)
        .put(messages.update_a_message)
        .delete(messages.delete_a_message)
}