
export const TaskItem = ({ task,onToggle, onDelete }) => {
    return (
        <div className={`task ${task.reminder ? 'task-reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}
                <i className="fas fa-times" style={{ color: "red" }} onClick={() => onDelete(task.id)}></i>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}