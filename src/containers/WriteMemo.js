import React, { Component, useEffect, useRef } from "react";
import { InputPlaceholder, WhiteBox } from "components/WriteMemo";
import { InputSet, SaveButton } from "components/Shared";
import { useDispatch, useSelector } from "react-redux";
import * as uiActions from "modules/ui";
import * as memoActions from "modules/memo";
import ToolBox from "components/Shared/ToolBox";
import ToolBoxContainer from "./ToolBoxContainer";

const WriteMemo = () => {
  const WhiteBoxRef = useRef();
  const write = useSelector((state) => state.ui.write);
  const memos = useSelector((state) => state.memo.data);
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

  //title, body가 갱신이 안되서 내용이 있을 땐 blur액션이 일어나지 않게 해야하는데 잘 안됌
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

  const handleCreate = () => {
    dispatch(memoActions.createMemo({ title, body }));
    dispatch(uiActions.resetInput());
    const cursor = memos[0] ? memos[0].id : 0;
    dispatch(memoActions.getRecentMemo(cursor));
  };

  return focused ? (
    <WhiteBox ref={WhiteBoxRef}>
      <InputSet onChange={handleChange} title={title} body={body} />
      <ToolBoxContainer type="ui/write" memo={write}>
        <SaveButton onClick={handleCreate} />
      </ToolBoxContainer>
    </WhiteBox>
  ) : (
    <WhiteBox ref={WhiteBoxRef} onClick={handleFocus}>
      <InputPlaceholder />
    </WhiteBox>
  );
};

export default WriteMemo;
