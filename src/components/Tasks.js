import { TaskItem } from "./TaskItem"

export const Tasks = ({ tasks, onToggle, onDelete }) => {
    return (
        <>
            {tasks.map((task) => <TaskItem task={task} onToggle={onToggle} onDelete={onDelete} key={task.id.toString()} />)}
        </>
    )
}