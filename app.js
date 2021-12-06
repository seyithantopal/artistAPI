const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


// Routers
const artistRouter = require('./routes/api/v1/artist');

// Routes
app.use('/api/v1/artist', artistRouter);

app.listen(port, () => console.log(`Server is running on ${port}`));
