require('dotenv').config();
const express = require('express')

const nunjucks = require('nunjucks')

const routes = require('./routes')

const server = express()

const methodOverride = require('method-override')

server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)


server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
  express: server,
  autoescape: false,
  noCache: true
})

port = process.env.PORT || 5000

server.listen(port, function() {
  console.log("server is running")
})