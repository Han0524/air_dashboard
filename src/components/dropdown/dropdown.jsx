import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomSelect = styled.select`
  width: 130px;
  padding: 8px;
  font-size: 0.8em;
  border-radius: 10px;
  background-color: #F4F6F8;
  border-color: transparent;
  cursor: pointer;
  color: #616161;
  outline: none;
`;

const Dropdown = ({ optionData, selectedValue, handleSelectedValue }) => (
  <CustomSelect
    value={selectedValue}
    onChange={(e) => handleSelectedValue(e.target.value)}
    className="custom-dropdown"
  >
    {optionData.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ))}
  </CustomSelect>
);

Dropdown.propTypes = {
    optionData: PropTypes.any,
    selectedValue: PropTypes.any,
    handleSelectedValue: PropTypes.func,
};

export default Dropdown;


