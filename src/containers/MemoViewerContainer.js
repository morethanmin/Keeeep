import MemoViewer from "components/MemoViewer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as uiActions from "modules/ui";
import * as memoActions from "modules/memo";

export default function MemoViewerContainer() {
  const memo = useSelector((state) => state.ui.memo);
  const dispatch = useDispatch();
  const { open, info } = memo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(uiActions.changeViewerInput({ name, value }));
  };

  const handleUpdate = () => {
    dispatch(memoActions.updateMemo(memo.info));
    dispatch(uiActions.closeViewer());
  };

  const handleDelete = () => {
    dispatch(memoActions.deleteMemo(memo.info.id));
    dispatch(uiActions.closeViewer());
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
      onUpdate={handleUpdate}
      onDelete={handleDelete}
    />
  );
}
