import React from "react";
import { useState } from "react";
import type { Task } from "../../types/index";


interface TaskFormProps {
    onAddTask: (task: Task) => void;
}



export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask}) => {
   const [title, setTitle] = useState("");

   const handleSubmit = () => {
    if (!title.trim()) return;
   
   const newTask: Task ={
    id: crypto.randomUUID(),
    title,
    description: "",
    status: "pending",
    priority: "low",
    dueDate: new Date().toISOString(),
   }
    console.log("submit fired");
   onAddTask(newTask);
   setTitle("");
   }
    return(
       <form 
        onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}
        >
            <input
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <button type="submit">Add Task</button>
        </form>
    )
}