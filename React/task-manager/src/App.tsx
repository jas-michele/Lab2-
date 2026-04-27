import { TaskList } from './components/TaskList/TaskList'
import { TaskForm } from './components/TaskForm/TaskForm'
import { useState } from 'react';
import './App.css'

function App() {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Test Task",
      description: "Testing",
      status: "pending",
      priority: "low",
      dueDate: "2024-01-01",
    },
  ]);

  const handleAddTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const handleStatusChange = (id: string, newStatus: TaskStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus }
          : task
      )
    )
  }

  return (
    <>
      <TaskForm onAddTask={handleAddTask} />

      <TaskList
      tasks={tasks}
      onStatusChange={handleStatusChange}
      onDelete={handleDelete}
      />

    </>
  )
}

export default App
