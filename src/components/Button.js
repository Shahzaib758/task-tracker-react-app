import PropTypes from "prop-types";

export const Button = ({text,bgColor,onClick}) => {
    return (
        <button className="btn" style={{backgroundColor: bgColor}} onClick={onClick}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}