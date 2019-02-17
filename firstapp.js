const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.write('my first express app');
    res.end();
});

app.get('/api/users',(req,res) => {
    res.write('my users express app');
    res.end();
});

app.listen(3000,() => {console.log('server listening on port 3000...')})
