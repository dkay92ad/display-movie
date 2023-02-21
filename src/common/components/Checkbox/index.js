import PropTypes from "prop-types";
const Checkbox = ({
  label,
  isDefaultChecked,
  searchCheckboxRef,
  onCheckHandler,
}) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          ref={searchCheckboxRef}
          checked={isDefaultChecked}
          onChange={onCheckHandler}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
Checkbox.prototype = {
  label: PropTypes.string.isRequired,
  isDefaultChecked: PropTypes.bool.isRequired,
  searchCheckboxRef: PropTypes.object.isRequired,
  onCheckHandler: PropTypes.func.isRequired,
};
export default Checkbox;
