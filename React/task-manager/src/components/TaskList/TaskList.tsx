import React from "react";
import { useState } from "react";
import type { TaskItemProps, TaskListProps, TaskStatus } from "../../types/index";
import { TaskFilter } from "../TaskFilter/TaskFilter";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onStatusChange,
    onDelete
}) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}
