import Memo from "./Memo";
import { useEffect, useRef, useState } from "react";

const { default: styled } = require("styled-components");

const Wrapper = styled.div`
  padding: 0 5rem;

  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: 1rem;
`;

const Column = styled.div`
  display: grid;
  grid-gap: 0rem;
  grid-auto-rows: max-content;
`;

const MemoList = ({ memos, onOpen, toolBox }) => {
  const ref = useRef();
  const [cols, setCols] = useState(4);
  const memoList = memos.map((memo) => (
    <Memo key={memo.id} memo={memo} onOpen={onOpen} toolBox={toolBox} />
  ));

  useEffect(() => {
    handleResize();
  }, [ref]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = (e) => {
    const colsNum = parseInt(ref.current.scrollWidth / 240);
    if (colsNum === 0) setCols(1);
    else setCols(colsNum);
  };

  const output = memoList.reduce((acc, child, i) => {
    acc[i % cols] = [...acc[i % cols], child];
    return acc;
  }, new Array(cols).fill([]));
  console.log(cols);

  return (
    <Wrapper ref={ref} columns={cols}>
      {output.map((column, i) => (
        <Column key={i}>{column}</Column>
      ))}
    </Wrapper>
  );
};

export default MemoList;
