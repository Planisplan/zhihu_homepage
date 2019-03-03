const sources = require('./sources_express')


const express = require('express')
const app = express()
const port = 4000

app.use('/', express.static('./build'))


app.get('/recommend',(req,res)=>{res.send(sources.articles)})
app.get('/follow',(req,res)=>{res.send(sources.articles)})
app.get('/hot',(req,res)=>{res.send(sources.articles)})

app.listen(port, () => console.log(`app running on ${port}...`))