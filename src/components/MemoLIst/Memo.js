import oc from "open-color";
import { BiPin, BiPalette } from "react-icons/bi";
import { MdLabelOutline } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

import Button from "components/Shared/Button";

const { default: styled } = require("styled-components");

const Wrapper = styled.div`
  position: relative;
  padding: 1rem 1.5rem;
  padding-bottom: 3rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  min-height: 104px;
  margin-bottom: 1rem;

  /* 텍스트가 길어지면 새 줄 생성; 박스 밖의 것은 숨김 */
  white-space: pre-wrap;
  word-wrap: break-word;

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Body = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  color: ${oc.gray[7]};
`;

const Wrap = styled.div``;
const ToolBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  opacity: 0;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    opacity: 1;
  }

  > div {
    display: flex;
    svg {
      font-size: 1.1rem;
    }
    color: #5f6368;
  }
`;
const ToolBoxTop = styled.div`
  flex-direction: row-reverse;
`;
const ToolBoxBottom = styled.div``;

const HoverTool = ({ children }) => {
  return (
    <Wrap>
      <ToolBox>
        <ToolBoxTop>
          <Button tooltip="fff">
            <BiPin />
          </Button>
        </ToolBoxTop>
        <ToolBoxBottom>
          <Button tooltip="fff">
            <BiPalette />
          </Button>
          <Button>
            <MdLabelOutline />
          </Button>
          <Button>
            <BiArchiveIn />
          </Button>
          <Button>
            <FaRegTrashAlt />
          </Button>
        </ToolBoxBottom>
      </ToolBox>
      <div>{children}</div>
    </Wrap>
  );
};

const Memo = ({ memo, onOpen }) => {
  const { title, body } = memo;

  const handleClick = () => {
    onOpen(memo);
  };

  return (
    <Wrapper onClick={handleClick}>
      <HoverTool>
        {title && <Title>{title}</Title>}
        <Body>{body}</Body>
      </HoverTool>
    </Wrapper>
  );
};

export default Memo;
