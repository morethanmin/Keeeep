import { AiOutlineCheck } from "react-icons/ai";
import Tooltip from "../Tooltip";

const { default: styled } = require("styled-components");

const Wrapper = styled.div`
  position: relative;
`;
const StyledCircle = styled.div`
  width: 25px;
  height: 25px;
  margin: 3px;
  border-radius: 50%;
  z-index: 9999;
  border: 2px solid ${({ border }) => border};
  background: ${({ color }) => color};

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    display: ${({ color, selectedColor }) =>
      color === selectedColor ? "block" : "none"};
  }
  &:hover {
    border: 2px solid black;
    & + div {
      visibility: visible;
    }
  }
`;

export default function Color({
  color,
  border,
  selectedColor,
  tooltip,
  onClick,
}) {
  return (
    <Wrapper onClick={onClick}>
      <StyledCircle color={color} border={border} selectedColor={selectedColor}>
        <AiOutlineCheck />
      </StyledCircle>
      {!!tooltip && <Tooltip content={tooltip} />}
    </Wrapper>
  );
}
