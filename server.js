import express from "express";

const app = express()
const PORT = process.env.PORT || 8080

const productList = [ 
    {name:"Samsung S22 Ultra", price:300},
    {name:"Iphone 14 Pro", price:500},
]

app.get("/", (req, res) => { 
    res.json({"user":"Jorge Mora", "role":"Web developer"})
})

app.get("/products", (req, res) => { 
    res.json(productList)
})  



app.listen(PORT, ()=> { 
    console.log("Server running")
})

