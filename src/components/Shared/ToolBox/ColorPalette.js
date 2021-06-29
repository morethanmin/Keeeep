import { BiPalette } from "react-icons/bi";
import Button from "../Button";
import Color from "./Color";

const { default: styled } = require("styled-components");

const Wrapper = styled.div`
  position: relative;
  &:hover {
    > :first-child {
      visibility: visible;
    }
  }
`;

const Palette = styled.div`
  z-index: 9999;
  visibility: hidden;
  background: white;
  position: absolute;
  width: 130px;
  height: 110px;
  left: 0;
  top: 0;
  transform: translate(0%, -100%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  cursor: default;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &:hover {
    visibility: visible;
  }
`;

const colors = [
  {
    color: "#FFFFFF",

    border: "#d9dce0",
    tooltip: "기본값",
  },
  { color: "#f28b82", tooltip: "빨간색" },
  { color: "#fbbc04", tooltip: "주황색" },
  { color: "#fff475", tooltip: "노랑색" },
  { color: "#ccff90", tooltip: "녹색" },
  { color: "#a7ffeb", tooltip: "청록색" },
  { color: "#cbf0f8", tooltip: "파랑색" },
  { color: "#aecbfa", tooltip: "진한파랑색" },
  { color: "#d7aefb", tooltip: "보라색" },
  { color: "#fdcfe8", tooltip: "분홍색" },
  { color: "#e6c9a8", tooltip: "갈색색" },
  { color: "#e8eaed", tooltip: "회색" },
];

export default function ColorPalette({ onColor, selectedColor }) {
  return (
    <Wrapper>
      <Palette>
        {colors.map((color, idx) => (
          <Color
            key={idx}
            color={color.color}
            onClick={(e) => {
              onColor(e, color);
            }}
            border={color.border ? color.border : color.color}
            selectedColor={selectedColor}
            tooltip={color.tooltip}
          />
        ))}
      </Palette>
      <Button
        onClick={(e) => {
          e.stopPropagation();
        }}
        tooltip="색상 변경"
      >
        <BiPalette />
      </Button>
    </Wrapper>
  );
}
