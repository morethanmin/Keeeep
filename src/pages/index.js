import { getInitialMemo } from "modules/memo";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as memoActions from "modules/memo";
import WriteMemo from "containers/WriteMemo";
import MemoListContainer from "containers/MemoListContainer";
import MemoViewerContainer from "containers/MemoViewerContainer";
// 위에서 내보낸 firestore 가져오기
import { firestore } from "../firebase";
export default function Index() {
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

  const fetchData = async () => {
    // 받아온 데이터를 저장할 배열

    // firestore.js에서 가져온 firestore 객체
    firestore
      .collection("memos") //  "memos" 컬렉션 반환
      .get() // "memos" 컬렉션의 모든 다큐먼트를 갖는 프로미스 반환
      .then((docs) => {
        // forEach 함수로 각각의 다큐먼트에 함수 실행
        docs.forEach((doc) => {
          // data(), id로 다큐먼트 필드, id 조회
          console.log(doc.data());
        });
        // tasks state에 받아온 데이터 추가
      });
  };
  // 최초 렌더링 이후에 실행하기 위해 useEffect 내부에서 함수 실행
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <WriteMemo />
      {loading ? null : <MemoListContainer />}
      <MemoViewerContainer />
    </>
  );
}
