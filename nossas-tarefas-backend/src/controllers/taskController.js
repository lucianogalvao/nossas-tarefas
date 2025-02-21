const Task = require("../models/Task");
const { getIo } = require("../config/socket");

exports.createTask = async (req, res) => {
  try {
    const io = getIo();
    const task = new Task(req.body);
    await task.save();
    io.emit("taskCreated", task);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("user", "name");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: "Tarefa não encontrada" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    const io = getIo();
    if (!updatedTask)
      return res.status(404).json({ error: "Tarefa não encontrada" });

    io.emit("taskUpdated", updatedTask);
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const io = getIo();
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask)
      return res.status(404).json({ error: "Tarefa não encontrada" });
    io.emit("taskDeleted", deletedTask);
    res.json({ message: "Tarefa removida com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
