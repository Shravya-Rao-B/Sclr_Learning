const express = require('express');
const app = express();
app.use(express.json());
let users = [{name: 'John', email: 'james@example'}];

app.get('/users', (req, res) => {
    res.send(users);
});
app.post('/newUser', (req, res) => {
    let user = req.body;
    console.log(user);
    // if(user.name.charAt(0).toLowerCase() !=="r")
    users.push(user);
    res.send("user created");
});

const port = 3000;
app.listen(port , () => {
    console.log("server listening on port " + port);
});