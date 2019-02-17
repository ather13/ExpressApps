const express = require('express');

const app = express();

app.use(express.json());
app.listen(3000,() => {console.log('server listening on port 3000')});

const users =[
    {id:1,name:'ather',dob:'11/12/1990'},
    {id:2,name:'john',dob:'11/12/1980'},
    {id:3,name:'mic',dob:'11/12/2018'},
    {id:4,name:'azhar',dob:'11/12/2100'},
]

app.get('/api/users',(req,res) => {
    res.send(users);    
});

app.get('/api/users/:id',(req,res) => {
    let uid = parseInt(req.params.id);
    const user = users.find((user)=>user.id === uid)
    if (!user) res.status(404).send('user not found');
    res.send(user);
});


app.post('/api/users',(req,res)=>{
    let user = {
        id:users.length+1,
        name:req.body.name,
        dob:req.body.dob
    }

    users.push(user);

    res.send(user);
});

app.put('/api/users',(req,res)=>{
    let uid = parseInt(req.body.id);
    const user = users.find((user)=>user.id === uid)
    if (!user) res.status(404).send('user not found');

    user.name=req.body.name;
    user.dob=req.body.dob;

    res.send(user);
});

app.delete('/api/users/:id',(req,res) => {
    let uid = parseInt(req.params.id);
    const index = users.findIndex((user)=>user.id === uid)
    
    if (index === -1 ) res.status(404).send('user not found');

    users.splice(index,1);

    res.send("user got deleted successfully");
});

