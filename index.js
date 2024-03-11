const express = require ('express')
const app= express()
const port= 3000

app.get ('/MiRuta',(req,res)=>{
    res.send('¡Hola mundo m¿soy Katherine Ortiz:)!')
})

app.listen (port,()=>{
    console.log('La aplicación se está ejecutando por el puerto'+port)
})