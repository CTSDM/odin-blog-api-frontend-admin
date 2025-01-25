import PropTypes from "prop-types";

export default function Visibility({ defaultValue }) {
    const value = defaultValue === undefined ? true : defaultValue;
    return (
        <div>
            Make the post visible:
            <input type="checkbox" name="visible" defaultChecked={value} />
        </div>
    );
}

Visibility.propTypes = {
    defaultValue: PropTypes.bool,
};
