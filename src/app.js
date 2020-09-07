const express = require('express');
const app = express();
app.use(express.json());
app.use('/users', require('./routes/users'));

app.listen(3000);
console.log('on port 3000');

module.exports = app;