import React from "react";

const Select = ({ dataSet, label, name, value, onSelect }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <select name={name} id={name} value={value} onChange={onSelect}>
        {dataSet
          ? dataSet.map((data) => {
              return (
                <option key={data.id} value={data.name} id={data.id}>
                  {data.name}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};

export default Select;
