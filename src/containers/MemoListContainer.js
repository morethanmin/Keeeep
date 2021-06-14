import MemoList from "components/MemoLIst";
import React from "react";
import { useSelector } from "react-redux";

export default function MemoListContainer() {
  const memos = useSelector((state) => state.memo.list);
  return <MemoList memos={memos} />;
}
