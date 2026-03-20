import { useState } from "react";
import type { TaskCardProps, TaskPriority, TaskStatus } from "../../types/task";

export const TaskCard = ({task}: TaskCardProps) => {
    const [status, setStatus] = useState(task.status);

    const nextStatus = () => {
        switch(status) {
            case "todo": 
                setStatus("in-progress"); 
                break;
            case "in-progress": 
                setStatus("done");
                break;
            case "done":
                setStatus("todo");
                break;
        }
    }

    const priorityColor: Record<TaskPriority, string> = {
        "low": "green",
        "medium": "orange",
        "high": "red"
    }

    const statusColor: Record<TaskStatus, string> = {
        "todo": "grey",
        "in-progress": "yellow",
        "done": "green"
    }

    return (
        <div className="task-card">
            <div className="task-card__header">
                <span className="task-card__priority" style={{color: priorityColor[task.priority]}}>
                    {task.priority}
                </span>
                <span className="task-card__status" style={{color: statusColor[status]}}>
                    {status}
                </span>
            </div>
            <h2 className="task-card__title">
                {task.title}
            </h2>
            <p className="task-card__description">
                {task.description}
            </p>
            <button 
                className="task-card__button" 
                disabled={status === "done"}
                onClick={nextStatus}>
                Next Status
            </button>
        </div>
    )

}