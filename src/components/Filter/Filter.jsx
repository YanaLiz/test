import React from "react";
import './Filter.css'

const Filter = ({ value, onChange }) => (
  <label htmlFor="" className="Filter_label">
    Фільтер по назві
    <input
      className="Filter_name"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);
export default Filter;