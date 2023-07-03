const con = require("../Dance_website/connaction.");
const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
// const mysql = require('mysql');


// EXPRESS SPECIFIC STUFF
// for serving static files
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
// set the template engine as pug
app.set ('view engine', 'pug')

// set the view diractory
app.set('views', path.join(__dirname, 'views'));




// END POINTS
app.get("/",(req,res)=>{
    const params = {}
    res.status(200).render('home.pug',params)
});

app.get("/contact",(req,res)=>{
    const params = {}
    res.status(200).render('contact.pug',params)
});

app.post("/contact",(req,res)=>{

    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const desc = req.body.desc;

    con.connect(function(error){
        if(error) throw error;
        
        var sql = "insert into client(name, phone, email, password, description) values('"+name+"','"+phone+"','"+email+"','"+password+"','"+desc+"')";

        con.query(sql,function(error, result){
            if(error) throw error;
            res.send('Register successful'+result.insertId);
        });

    });

});;




// START THE SERVER
app.listen(port,()=>{
    console.log(`the application start successfully on port ${port}`);
});