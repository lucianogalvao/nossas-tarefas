const Task = require("../models/Task");

// Criar tarefa
exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todas a tarefas
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lista uma tarefa por id
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: "Tarefa não encontrada" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualiza tarefa
exports.updateTask = async (req, res) => {
  try {
    const updatedTask = Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTask)
      return res.status(404).json({ error: "Tarefa não encontrada" });

    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deleta tarefa
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask)
      return res.status(404).json({ error: "Tarefa não encontrada" });
    res.json({ message: "Tarefa removida com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
