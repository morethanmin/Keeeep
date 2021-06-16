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
  const memos = useSelector((state) => state.memo.data, shallowEqual);
  const current = useRef(null);

  useEffect(() => {
    dispatch(getInitialMemo());
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    current.current = memos;
  }, [memos]);

  const handleScroll = (e) => {
    const { clientHeight } = document.body;
    const { innerHeight } = window;

    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (clientHeight - innerHeight - scrollTop < 100) {
      const cursor = current.current[current.current.length - 1].id;
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
