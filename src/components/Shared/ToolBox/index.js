import React from "react";
import Button from "../Button";
import { BiPin, BiPalette } from "react-icons/bi";
import { MdLabelOutline } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
const { default: styled, css } = require("styled-components");

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  opacity: 1;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);

  ${({ visibleOnHover }) =>
    visibleOnHover
      ? css`
          opacity: 0;

          &:hover {
            opacity: 1;
          }
        `
      : css``}

  > div {
    display: flex;
    svg {
      font-size: 1.1rem;
    }
    color: #5f6368;
  }
`;
const Top = styled.div`
  flex-direction: row-reverse;
`;
const Bottom = styled.div`
  justify-content: space-between;
`;
const BottomLeft = styled.div`
  display: flex;
`;
const BottomRight = styled.div`
  display: flex;
`;

export default function ToolBox({ visibleOnHover, children, onDelete }) {
  return (
    <Wrapper visibleOnHover={visibleOnHover}>
      <Top>
        <Button tooltip="메모 고정">
          <BiPin />
        </Button>
      </Top>
      <Bottom>
        <BottomLeft>
          <Button tooltip="색상 변경">
            <BiPalette />
          </Button>
          <Button tooltip="라벨 선택">
            <MdLabelOutline />
          </Button>
          <Button tooltip="보관 처리">
            <BiArchiveIn />
          </Button>
          <Button onClick={onDelete} tooltip="메모 삭제">
            <FaRegTrashAlt />
          </Button>
        </BottomLeft>
        <BottomRight>{children}</BottomRight>
      </Bottom>
    </Wrapper>
  );
}
