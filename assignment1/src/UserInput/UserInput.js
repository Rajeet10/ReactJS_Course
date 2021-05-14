import React from "react";
const userInput = (props) => {
  const style = {
    border: "1px solid red",
  };
  return (
    <input
      type="text"
      style={style}
      onChange={props.changevalues}
      value={props.currentname}
    />
  );
  //props.value for 2 way binding
  //.current name for current name bt as we have kept list of name so we will display first name
};

export default userInput;
