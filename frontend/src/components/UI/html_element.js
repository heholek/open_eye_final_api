import React from "react";
import Input from "./input";

const InputTag = props => {
  let inputFieldData = null;

  switch (props.fieldInputType) {
    case "text":
      inputFieldData = <Input type="text" className={props.elementClass} />;
      break;
    case "textarea":
      inputFieldData = (
        <textarea className={props.elementClass}>
          {props.elemenyFieldValue}
        </textarea>
      );
      break;
    case "select":
      inputFieldData = (
        <select className={props.elementClass}>
          {props.selectElementOption}
        </select>
      );
      break;
    case "checkbox":
      inputFieldData = <Input type="checkbox" className={props.elementClass} />;
      break;
    case "date":
      inputFieldData = <Input type="date" className={props.elementClass} />;
      break;
    case "datetime":
      inputFieldData = <Input type="date" className={props.elementClass} />;
      break;
    case "time":
      inputFieldData = <Input type="time" className={props.elementClass} />;
      break;
    case "radio":
      inputFieldData = <Input type="radio" className={props.elementClass} />;
      break;
    case "radio_button":
      inputFieldData = <Input type="radio" className={props.elementClass} />;
      break;
    case "textarea_picklist":
      inputFieldData = (
        <textarea className={props.elementClass}>
          {props.elemenyFieldValue}
        </textarea>
      );
      break;
    case "search-select":
      inputFieldData = "";
      break;
    default:
      inputFieldData = "";
  }

  return <div>{inputFieldData}</div>;
};

export default InputTag;
