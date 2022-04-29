const express = require('express');
const app = express();
const rutas = require('./routers/main.js')
const path = require('path');
let publicpath = path.resolve(__dirname + '/public'); //fuck

app.use(express.static(publicpath)); //fuck


app.listen(3000,()=>{
    console.log('Servidor Funcionando en puerto 3000');
})

 app.use('/', rutas);




