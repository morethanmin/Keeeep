import MemoList from "components/MemoLIst";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as uiActions from "modules/ui";

export default function MemoListContainer() {
  const memos = useSelector((state) => state.memo.list);
  const dispatch = useDispatch();
  return (
    <MemoList
      memos={memos}
      onOpen={(payload) => {
        dispatch(uiActions.openViewer(payload));
      }}
    />
  );
}
