import ToolBox from "components/Shared/ToolBox";
import React from "react";

export default function ToolBoxContainer({
  memo = {},
  visibleOnHover = false,
  children,
}) {
  const { id, title, body } = memo;
  console.log(memo);
  return <ToolBox visibleOnHover={visibleOnHover}>{children}</ToolBox>;
}
