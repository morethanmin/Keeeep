import { media, transitions } from "lib/style-utils";
import Memo from "./Memo";

const { default: styled } = require("styled-components");

const Wrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: 1rem;
`;

const Column = styled.div`
  display: grid;
  grid-gap: 0.6rem;
  grid-auto-rows: max-content;
`;

const MemoList = ({ memos, onOpen }) => {
  const memoList = memos.map((memo) => (
    <Memo key={memo.id} memo={memo} onOpen={onOpen} />
  ));

  const output = memoList.reduce((acc, child, i) => {
    acc[i % 3] = [...acc[i % 3], child];
    return acc;
  }, new Array(3).fill([]));

  return (
    <Wrapper columns={3}>
      {output.map((column, i) => (
        <Column key={i}>{column}</Column>
      ))}
    </Wrapper>
  );
};

export default MemoList;
