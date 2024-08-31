const express = require ("express");
require("dotenv").config();
const app = express();

//manda una funcion en express midelwer
var saludo=(req, res,next)=>{
    console.log("hola");
    next();
}

app.use((req, res,next)=>{
    console.log("middleware para todas las rutas");
    next();
});

//esta es una funcion de raiz
app.get("/",saludo,(req,res)=>{
    res.send("estas en raiz");
});

app.get("/home",saludo,(req,res)=>{
    res.send("estas en home");
});

app.get("/trabajo",(req,res)=>{
    res.send("estas en trabajo");
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("servidor en http://localhost:"+port);
});
