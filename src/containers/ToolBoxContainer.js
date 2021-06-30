import ToolBox from "components/shared/ToolBox";
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
  const { id, info } = memo;
  console.log(info);
  const handlePin = (e) => {
    e.stopPropagation();

    switch (type) {
      case "memo":
        console.log("memo", id);

        return;
      case "ui/memo":
        console.log("ui/memo", id);

        return;
      case "ui/write":
        console.log("ui/write", id);

        return;
    }
  };

  const handleColor = (e, color) => {
    e.stopPropagation();

    switch (type) {
      case "memo":
        console.log("memo", color, id);

        return;
      case "ui/memo":
        console.log("ui/memo", color, id);

        return;
      case "ui/write":
        dispatch(uiActions.changeInput({ name: "color", value: color.color }));

        return;
    }
  };

  const handleLabel = (e) => {
    e.stopPropagation();

    switch (type) {
      case "memo":
        console.log("memo", id);

        return;
      case "ui/memo":
        console.log("ui/memo", id);

        return;
      case "ui/write":
        console.log("ui/write", id);
        return;
    }
  };

  const handleArchive = (e) => {
    e.stopPropagation();

    switch (type) {
      case "memo":
        console.log("memo", id);

        return;
      case "ui/memo":
        console.log("ui/memo", id);

        return;
      case "ui/write":
        console.log("ui/write", id);

        return;
    }
  };

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
      case "ui/write":
        //write input 초기화 및 blur 이벤트
        dispatch(uiActions.resetInput());
        dispatch(uiActions.blurInput());
        return;
      default:
        return;
    }
  };
  return (
    <ToolBox
      onPin={handlePin}
      onColor={handleColor}
      onLabel={handleLabel}
      onArchive={handleArchive}
      onDelete={handleDelete}
      visibleOnHover={visibleOnHover}
      info={info}
    >
      {children}
    </ToolBox>
  );
}
