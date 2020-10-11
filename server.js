const express = require('express')
const bodyParser = require('body-parser')
const https = require('https')
const Task = require('./models/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
app.use(bodyParser.json())

//mongoose
mongoose.connect('mongodb://localhost:27017/iCrowdTaskDB',{useNewUrlParser:true,useUnifiedTopology:true})

//upload route
app.post('/upload',(req,res)=>{
    if(req.body.taskType === 'choice'){
        const task = new Task({
            taskType:req.body.taskType,
            title:req.body.title,
            description:req.body.description,
            date:req.body.date,
            task:req.body.choiceTask,
            options:req.body.options,
            masterWorkers:req.body.masterWorkers,
            reward:req.body.reward,
            workerNumber:req.body.workerNumber
        });
        task.save()
        .catch((err)=>console.log(err));
        res.json(('saved to db:' + task))
    }else if(req.body.taskType === 'decision'){
        const task = new Task({
            type:req.body.type,
            title:req.body.title,
            description:req.body.description,
            date:req.body.date,
            task:req.body.decisionTask,
            masterWorkers:req.body.masterWorkers,
            reward:req.body.reward,
            workerNumber:req.body.workerNumber
        })
        task.save()
        .catch((err)=>console.log(err));
        res.json(('saved to db:' + task))
    }else{
        const task = new Task({
            type:req.body.type,
            title:req.body.title,
            description:req.body.description,
            date:req.body.date,
            task:req.body.sentenceTask,
            masterWorkers:req.body.masterWorkers,
            reward:req.body.reward,
            workerNumber:req.body.workerNumber
        })
        task.save()
        .catch((err)=>console.log(err));
        res.json(('saved to db:' + task))
    }
})

let port = process.env.PORT;
if(port == null || port == ''){
    port = 4000
}

app.listen(port, (req,res)=>{
    console.log('Server is running successfully on ' + port +'!')
})