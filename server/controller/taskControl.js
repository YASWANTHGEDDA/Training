const taskModel = require("./../model/taskSchema");

exports.createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const ntask = new taskModel({ title, description });
        await ntask.save();
        res.status(200).json(ntask);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

exports.getTask = async (req, res) => {
    try {
        const task = await taskModel.find();
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}
exports.getTaskById = async (req, res) => {
    try {
        const task = await taskModel.findById(req.params.id);
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }

}

exports.updateTask = async(req,res)=>{
    try{
        const utask = await taskModel.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.json(utask);
    }catch(e){
        res.status(500).json({message: e.message});
    }
}


exports.deleteTask = async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id);
      res.json({ message: "Task deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


