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
    const [filters, setFilters] = useState<{
        status?: TaskStatus;
        priorirty?: "low" | "medium" | "high";
    }>({});

const handleFilterChange = (newFilter: typeof filters) => {
    setFilters(newFilter);
};

const filteredTasks = tasks.filter((task) => {
    const statusMatch = filters.status
            ? task.status === filters.status
            : true;

            const priorirtyMatch = filters.priorirty
            ? task.priority === filters.priorirty
            : true;

            return statusMatch && priorirtyMatch;
});


    return (
        <div>
            <TaskFilter onFilterChange={handleFilterChange} />

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
