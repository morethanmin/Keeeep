import oc from "open-color";

const { default: styled } = require("styled-components");

const Wrapper = styled.div`
  position: relative;
  padding: 1rem 1.5rem;
  padding-bottom: 3rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  min-height: 104px;
  margin-bottom: 1rem;
  background: ${({ color }) => color};
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

const Memo = ({ memo, onOpen, toolBox: ToolBox }) => {
  const { title, body, color } = memo;
  const handleClick = (e) => {
    e.cancelBubble = true;
    onOpen(memo);
  };

  return (
    <Wrapper color={color} onClick={handleClick}>
      <ToolBox type="memo" memo={memo} visibleOnHover />

      {title && <Title>{title}</Title>}
      <Body>{body}</Body>
    </Wrapper>
  );
};

export default Memo;
