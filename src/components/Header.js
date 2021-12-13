import PropTypes from "prop-types";
import { Button } from "./Button";

export const Header = ({ showAddTask, setShowAddTask, title }) => {
    const onAdd = () => {
        setShowAddTask(!showAddTask);
    }

    return (
        <h1 className="header">
            {title}
            <Button text={showAddTask ? "Close" : "Add"} bgColor={showAddTask ? "red" : "green"} onClick={onAdd} />
        </h1>
    );
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

