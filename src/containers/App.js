import { getInitialMemo } from "modules/memo";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Layout from "../components/Layout";
import MemoListContainer from "./MemoListContainer";
import WriteMemo from "./WriteMemo";
import * as memoActions from "modules/memo";
import MemoViewerContainer from "./MemoViewerContainer";

export default function App() {
  const dispatch = useDispatch();
  const memos = useSelector((state) => state.memo.data);
  useEffect(() => {
    dispatch(getInitialMemo());
  }, []);

  //5초마다 불러오는데 , memos가 갱신이 안되는 이슈
  const getRecentMemo = () => {
    console.log(memos);
    setTimeout(() => {
      getRecentMemo();
    }, 1000 * 5);
  };
  return (
    <Layout>
      <Header />
      <Layout.Main>
        <WriteMemo />
        <MemoListContainer />
      </Layout.Main>
      <MemoViewerContainer />
    </Layout>
  );
}
