import express from "express"
import "dotenv/config"

const app = express()
const port=3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send('more stuff will be added later')
})

app.listen(process.env.Port, () => {
  console.log(`Example app listening on port ${port}`)
})
