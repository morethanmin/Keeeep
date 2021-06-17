import { getInitialMemo } from "modules/memo";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Header from "../components/Header";
import Layout from "../components/Layout";
import MemoListContainer from "./MemoListContainer";
import WriteMemo from "./WriteMemo";
import * as memoActions from "modules/memo";
import MemoViewerContainer from "./MemoViewerContainer";

export default function App() {
  const dispatch = useDispatch();
  const memos = useSelector((state) => state.memo.data);
  // const current = useRef(null);
  var cursor = 0;

  useEffect(() => {
    dispatch(getInitialMemo());
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // console.log(scrollListener);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [memos]);

  // useEffect(() => {
  //   current.current = memos;
  // }, [memos]);

  const handleScroll = () => {
    const { clientHeight } = document.body;
    const { innerHeight } = window;

    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (clientHeight - innerHeight - scrollTop < 100) {
      var curCursor;
      if (memos.length === 0) return;
      curCursor = memos[memos.length - 1].id;
      if (cursor === curCursor) return;
      cursor = curCursor;
      // console.log(memos, memos.length - 1);
      console.log(cursor);
      dispatch(memoActions.getPreviousMemo(cursor));
    }
  };

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
