const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    taskType: String,
    title: String,
    description: String,
    date: String,
    task: String,
    sentenceTask: String,
    choiceTask: String,
    decisionTask: String,
    options: String,
    masterWorkers: String,
    reward: String,
    workerNumber: String
});

module.exports = mongoose.model('Task',TaskSchema);