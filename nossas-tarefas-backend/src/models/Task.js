const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pendente", "Concluída"],
      default: "Pendente",
    },
    type: {
      type: String,
      enum: ["Recorrente", "Único"],
      required: true,
    },
    repeatDays: {
      type: [String],
      required: function () {
        return this.type === "Recorrente";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
