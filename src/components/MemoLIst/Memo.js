import oc from "open-color";

const { media } = require("lib/style-utils");
const { default: styled } = require("styled-components");

const Contents = styled.div`
  display: inline-block;
  width: 238px;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  min-height: 104px;
  margin-bottom: 1rem;

  /* 텍스트가 길어지면 새 줄 생성; 박스 밖의 것은 숨김 */
  white-space: pre-wrap;
  overflow: hidden;

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Body = styled.div`
  font-size: 1.1rem;
  font-weight: 300;
  color: ${oc.gray[7]};
`;

const Memo = ({ memo, onOpen }) => {
  const { title, body } = memo;

  const handleClick = () => {
    onOpen(memo);
  };

  return (
    <Contents onClick={handleClick}>
      {title && <Title>{title}</Title>}
      <Body>{body}</Body>
    </Contents>
  );
};

export default Memo;
