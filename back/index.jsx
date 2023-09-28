const express = require('express');
const app = express();
const cors = require('cors');
const mysql =require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'candidatodb'
})

app.use(cors());
app.use(express.json())
app.listen(3001,() =>{
    console.log('listening on 3001')
})

app.get('/',(req,res)=>{
    res.send({status:200});
})

//empresa
app.post('/empresa',(req,res)=>{
    const nombre_empresa = req.body.nombre_empresa
    const nit = req.body.nit
    const direccion = req.body.direccion
    const email = req.body.email
    const password = req.body.password
    const logo = req.body.logo
    db.query('INSERT INTO empresa (nombre_empresa,nit,direccion,email,password,logo) VALUES(?;?;?;?;?,?',[nombre_empresa,nit,direccion,email,password,logo],
        (err,result) => {
            if(err){
                res.send({
                    status: 400,
                    menssage: err
                })
            }else{
                res.status(201)
                .send({
                    status: 201,
                    menssage: 'empresa creada con exito',
                    data: result
                })
            }
        }
    );
})