import React from "react";
import "./input.css";
// function Inputnumbtn({ value = 1, onChange, ...rest }) {
//   return (

//     <input
//       {...rest}
//       className="form-control"
//       type="number"
//       id="quantity"
//       name="quantity"
//       min="1"
//       onChange={(e) => onChange(e.currentTarget.value)}
//       value={value}
//     />
//   );
// }

function Inputnumbtn({ value = 1, onChange }) {
  return (
    <div className="add-btn">
      {value < 1 ? (
        <div className="add-btn1" onClick={() => onChange(value + 1)}>+Add</div>
      ) : (
        <div className="add-btn2">
          <div className="show-value">{value}</div>
          <div className="show-icon">
            <div className="icon-1" onClick={() => onChange(value + 1)}>
              {">"}
            </div>
            <div className="icon-2" onClick={() => onChange(value - 1)}>
              {"<"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Inputnumbtn;
