import React from "react";
import PropTypes from 'prop-types';

import "./dropdown.css";

const Dropdown = ({ optionData, selectedValue, handleSelectedValue }) => (
  <select
    value={selectedValue}
    onChange={(e) => handleSelectedValue(e.target.value)}
    className="custom-dropdown"
  >
    {optionData.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ))}
  </select>
);

Dropdown.propTypes = {
    optionData: PropTypes.any,
    selectedValue: PropTypes.any,
    handleSelectedValue: PropTypes.func,
};

export default Dropdown;


