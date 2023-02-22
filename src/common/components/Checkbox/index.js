import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ label, isChecked, onCheckHandler }) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" checked={isChecked} onChange={onCheckHandler} />
        <span>{label}</span>
      </label>
    </div>
  );
};
Checkbox.prototype = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onCheckHandler: PropTypes.func.isRequired,
};
export default React.memo(Checkbox);
