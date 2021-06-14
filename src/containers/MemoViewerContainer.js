import MemoViewer from "components/MemoViewer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as uiActions from "modules/ui";

export default function MemoViewerContainer() {
  const memo = useSelector((state) => state.ui.memo);
  const dispatch = useDispatch();
  const { open, info } = memo;
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(uiActions.changeViewerInput({ name, value }));
  };

  return (
    <MemoViewer
      visible={open}
      title={info.title}
      body={info.body}
      onChange={handleChange}
      onClose={() => {
        dispatch(uiActions.closeViewer());
      }}
    />
  );
}
