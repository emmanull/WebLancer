const express=require('express');
const app=express();

/* app.get('/',(req,rep)=>{
rep.end('name');
}); */
app.use(express.static('public'))

app.listen(3000,()=>{
    console.log('Servidor levantado.')
});



