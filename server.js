const cors = require('cors')
const axios = require('axios')
const express = require('express')

const app = express()
app.set("port", 3333 || 8000);
app.use(cors())

app.get('/products', async(req,res)=>{

    try {
        
        const {data} = await axios('https://www.fruityvice.com/api/fruit/all')
        return res.json(data)
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
})

app.get('/search/:name', async(req,res)=>{

    try {
        
        const {data} = await axios(`https://www.fruityvice.com/api/fruit/${req.params.id}`)
        return res.json(data)
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
})


app.listen(app.get("port"), () => {
    console.log("api up on port",app.get("port"));
});
  