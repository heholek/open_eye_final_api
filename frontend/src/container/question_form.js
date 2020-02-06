import React, { Component } from "react";
import InputTag from "../components/UI/html_element";

class FormComponent extends Component {
  state = {
    isChild: false,
    parentID: null,
    showQuestionForParentValue: null,
    question: null,
    category: null,
    answerType: null,
    answerValue: [],
    defaultAnswer: null,
    disableQuestion: false,
    ageRange: [],
    forGender: []
  };

  render() {
    return (
      <div>
        <InputTag fieldInputType='text' ></InputTag>
        <InputTag fieldInputType='text' ></InputTag>
        <InputTag fieldInputType='text' ></InputTag>
        <InputTag fieldInputType='text' ></InputTag>
        <InputTag fieldInputType='text' ></InputTag>
        <InputTag fieldInputType='text' ></InputTag>
        <InputTag fieldInputType='text' ></InputTag>
        <InputTag fieldInputType='text' ></InputTag>
      </div>
    );
  }
}

export default FormComponent;
