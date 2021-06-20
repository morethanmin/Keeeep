import { media, transitions } from "lib/style-utils";
import Memo from "./Memo";
import Masonry from "react-masonry-css";

const { default: styled } = require("styled-components");

const breakpointColumnsObj = {
  default: 5,
  1300: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const StyledMasonry = styled(Masonry)`
  margin-top: 3rem;
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
  .my-masonry-grid_column {
    padding-left: 1rem;
  }
`;

const MemoList = ({ memos, onOpen }) => {
  const memoList = memos.map((memo) => (
    <Memo key={memo.id} memo={memo} onOpen={onOpen} />
  ));
  return (
    <StyledMasonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {memoList}
    </StyledMasonry>
    // <Wrapper columns={3}>
    //   {output.map((column, i) => (
    //     <Column key={i}>{column}</Column>
    //   ))}
    // </Wrapper>
  );
};

export default MemoList;
