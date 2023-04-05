const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const env = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
env.config()
app.use(cors())
app.use(bodyParser.json())

const configuration = new Configuration({
    organization: process.env.ORG_KEY,
    apiKey: process.env.API_KEY
});

const openai = new OpenAIApi(configuration);

app.post('/', async (req,res)=>{
    const { message } = req.body;

    try {
        const ans = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${message}`,
            max_tokens: 100,
            temperature: .5
        })
        res.json({message: ans.data.choices[0].text})
    } catch (e) {
        res.send(e).status(400)
    }
})

app.listen('3080',()=>{
    console.log("run on 3080");
})