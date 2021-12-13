import { useState } from "react";

export const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const addTask = (e) => {
        e.preventDefault();
        if (!text || !day) {
            alert("Fill Task & Day");
            return;
        }
        onAdd(text, day, reminder);
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={addTask}>
            <div className="form-control">
                <label htmlFor="add-task">Task</label>
                <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Add Task" id="add-task" />
            </div>
            <div className="form-control">
                <label htmlFor="add-day">Day & Time</label>
                <input type="text" value={day} onChange={e => setDay(e.target.value)} placeholder="Add Day & Time" id="add-day" />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="add-reminder">Set Reminder</label>
                <input type="checkbox"  checked={reminder} onChange={e => setReminder(e.currentTarget.checked)}  id="add-reminder" />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    );
}