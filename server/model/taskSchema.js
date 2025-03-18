const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title must be needed"]
        },
        description: {
            type: String,
            required: true
        }
    }
)

const taskModel = mongoose.model("Task",taskSchema);

module.exports = taskModel;