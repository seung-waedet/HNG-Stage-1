const express = require('express');
const routes = require('../Task 1/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', routes);


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});