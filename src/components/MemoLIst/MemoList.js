import { media, transitions } from "lib/style-utils";
import Memo from "./Memo";
import Masonry from "react-masonry-css";
import { useEffect, useRef, useState } from "react";

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
  width: auto;
  .my-masonry-grid_column {
    padding: 0 0.5rem;
  }
`;

const MemoList = ({ memos, onOpen }) => {
  const ref = useRef();
  const [cols, setCols] = useState(0);
  const memoList = memos.map((memo) => (
    <Memo key={memo.id} memo={memo} onOpen={onOpen} />
  ));
  useEffect(() => {
    setCols(parseInt(ref.current.scrollWidth / 240));
  }, [ref]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = (e) => {
    setCols(parseInt(ref.current.scrollWidth / 240));
  };
  console.log(cols);

  return (
    <div ref={ref}>
      <StyledMasonry
        breakpointCols={cols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {memoList}
      </StyledMasonry>
    </div>
    // <Wrapper columns={3}>
    //   {output.map((column, i) => (
    //     <Column key={i}>{column}</Column>
    //   ))}
    // </Wrapper>
  );
};

export default MemoList;
