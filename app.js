const express = require('express');
const app = express();

// directories
app.use(express.static('routes/pyscripts-api/python'));
app.use(express.static('resources/html'));
app.use(express.static('resources/stylesheet'));
app.use(express.static('resources/javascript'));
app.use(express.static('resources/images')); // temporary
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/jquery/dist'))

// routes
app.use('/', require('./routes/index.js')); // home
app.use('/api/pyscripts/', require('./routes/pyscripts-api.js')); // api to call python scripts

// // Either uses the environment variable PORT or 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server started on localhost:${PORT}`)
})