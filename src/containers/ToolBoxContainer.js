import ToolBox from "components/Shared/ToolBox";
import React from "react";
import * as memoActions from "modules/memo";
import * as uiActions from "modules/ui";

import { useDispatch } from "react-redux";

export default function ToolBoxContainer({
  memo = {},
  type,
  visibleOnHover = false,
  children,
}) {
  const dispatch = useDispatch();
  const { id } = memo;

  const handleDelete = (e) => {
    e.stopPropagation();
    switch (type) {
      case "memo":
        dispatch(memoActions.deleteMemo(id));
        return;
      case "ui/memo":
        dispatch(memoActions.deleteMemo(id));
        dispatch(uiActions.closeViewer());
        return;
      default:
        return;
    }
  };
  return (
    <ToolBox onDelete={handleDelete} visibleOnHover={visibleOnHover}>
      {children}
    </ToolBox>
  );
}
