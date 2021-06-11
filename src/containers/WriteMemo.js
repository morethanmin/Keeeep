import React, { Component } from "react";
import { InputPlaceholder, WhiteBox } from "components/WriteMemo";
import { InputSet, SaveButton } from "components/Shared";

class WriteMemo extends Component {
  render() {
    return (
      <WhiteBox>
        {/* <InputPlaceholder /> */}
        <InputSet />
        <SaveButton />
      </WhiteBox>
    );
  }
}

export default WriteMemo;
