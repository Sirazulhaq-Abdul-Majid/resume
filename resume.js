const express=require('express')
const app=express()
const port=process.env.PORT||3000

app.get('/',(req,res)=>{
    res.send('aloha!')
})
app.listen(`${port}`)

app.use((req,res,next)=>{
    res.status=400
    res.send('error 404')
})

app.use((req,res,next,err)=>{
    res.status=500 
    res.send('error 500')
})