import React from "react";

const Valid = (props) => {
    let validmessage='Text TO LONG';
    if(props.inputlength<=5){
        validmessage = "TEXT to short";
    }
  return (
    <div>
        {
            validmessage
        }
    </div>
  );
};

export default Valid;
