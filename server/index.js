const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors());

app.get('/api/data', (req, res) => {
    const data = {
        message: "Hello from the server!"
    }

    res.json(data);
});

app.get('/api/hello', (req, res) => {
    res.json({
        msg: "Hello NodeJS!"
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


