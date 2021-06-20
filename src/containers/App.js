import { getInitialMemo } from "modules/memo";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout";
import MemoListContainer from "./MemoListContainer";
import WriteMemo from "./WriteMemo";
import * as memoActions from "modules/memo";
import MemoViewerContainer from "./MemoViewerContainer";
import Spinner from "components/Spinner";

export default function App() {
  const dispatch = useDispatch();
  const { data: memos, loading } = useSelector((state) => state.memo);
  var cursor = 0;

  useEffect(() => {
    dispatch(getInitialMemo());
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [memos]);

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
      if (cursor === 1) return;
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
        <Layout.Nav>navbar</Layout.Nav>

        <Layout.Content>
          <WriteMemo />
          {loading ? <Spinner visible={loading} /> : <MemoListContainer />}
        </Layout.Content>
      </Layout.Main>
      <MemoViewerContainer />
    </Layout>
  );
}
