const sources = require('./sources_express')


const express = require('express')
const app = express()
const port = 4000
console.log(sources.articles)


app.use(express.static('./build'))

app.get('/follow',(req,res)=>{res.send('11111')})
app.get('/recommend',(req,res)=>{res.send('2222')})

app.listen(port, () => console.log(`app running on ${port}...`))