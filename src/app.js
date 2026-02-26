const express = require('express');
const app = express();
app.use(express.json());

const tasksRouter = require('./routes/tasks');

app.get('/', (req, res) => {
  res.json({ message: "DevOps Task Manager API is running (lab 2)" });
});

// CI test change
console.log("Testing CI with a Pull Request");

app.use('/tasks', tasksRouter); 

if (require.main === module) {
  app.listen(3000, () => console.log("API running on port 3000")); 
}

module.exports = app; 