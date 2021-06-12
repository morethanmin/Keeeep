import React, { Component, useEffect, useRef } from "react";
import { InputPlaceholder, WhiteBox } from "components/WriteMemo";
import { InputSet, SaveButton } from "components/Shared";
import { useDispatch, useSelector } from "react-redux";
import * as uiActions from "modules/ui";

const WriteMemo = () => {
  const WhiteBoxRef = useRef();
  const write = useSelector((state) => state.ui.write);
  const { focused, title, body } = write;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleFocus = () => {
    if (!focused) {
      dispatch(uiActions.focusInput());
      document.addEventListener("mousedown", handleClick);
    }
  };

  const handleClick = (e) => {
    if (WhiteBoxRef.current.contains(e.target)) {
      return;
    }
    dispatch(uiActions.blurInput());
    document.removeEventListener("mousedown", handleClick);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(uiActions.changeInput({ name, value }));
  };

  return focused ? (
    <WhiteBox ref={WhiteBoxRef}>
      {/* <InputPlaceholder /> */}
      <InputSet onChange={handleChange} title={title} body={body} />
      <SaveButton />
    </WhiteBox>
  ) : (
    <WhiteBox ref={WhiteBoxRef} onClick={handleFocus}>
      <InputPlaceholder />
    </WhiteBox>
  );
};

export default WriteMemo;
