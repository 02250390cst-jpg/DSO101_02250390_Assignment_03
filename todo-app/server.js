const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Todo App is Running Successfully!");
});

app.get("/todos", (req, res) => {
  const todos = [
    { id: 1, task: "Learn Docker", completed: false },
    { id: 2, task: "Learn GitHub Actions", completed: false }
  ];

  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
