const mongoose = require('mongoose')
module.exports = mongoose.connect(process.env.DB_CONN);

mongoose.Error.messages.general.required = "O Campo '{PATH}' é obrigatório."