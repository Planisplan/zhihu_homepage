const sources = require('./sources_express')


const express = require('express')
const app = express()
const port = 4000

app.use('/', express.static('./build'))
app.use(express.static('public'))


app.get('/hot',(req,res)=>{res.send(sources.articles.hot)})
app.get('/follow',(req,res)=>{res.send(sources.articles.follow)})
app.get('/featured',(req,res)=>{res.send(sources.articles.featured)})
app.get('/hotSearch',(req,res)=>{res.send(sources.hotSearch)})
app.get('/msglist',(req,res)=>{res.send(sources.messageList)})
app.get('/topics',(req,res)=>{res.send(sources.topics)})

app.listen(port, () => console.log(`app running on ${port}...`))