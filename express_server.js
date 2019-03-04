const sources = require('./sources_express')


const express = require('express')
const app = express()
const port = 4000

app.use('/', express.static('./build'))
app.use(express.static('public'))


app.get('/contents',(req,res)=>{res.send(sources.articles)})


app.listen(port, () => console.log(`app running on ${port}...`))