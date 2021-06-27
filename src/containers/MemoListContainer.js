import MemoList from "components/MemoLIst";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as uiActions from "modules/ui";
import ToolBoxContainer from "./ToolBoxContainer";

export default function MemoListContainer() {
  const memos = useSelector((state) => state.memo.data);
  const dispatch = useDispatch();
  return (
    <MemoList
      memos={memos}
      toolBox={ToolBoxContainer}
      onOpen={(payload) => {
        dispatch(uiActions.openViewer(payload));
      }}
    />
  );
}
