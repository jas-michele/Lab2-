import React from "react";
import type { TaskFilterProps } from "../../types";

export const TaskFilter: React.FC<TaskFilterProps> = ({
    onFilterChange
}) => {
    return (
        <div className="filter">
            <select onChange={(e) => onFilterChange({ status: e.target.value as any})}
            >
                <option value="">All</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    )
}