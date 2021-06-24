import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const StyledButton = styled.button`
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: ${({ size }) => size}px;
  justify-content: center;
  background: transparent;
  color: #5f6368;

  &:hover {
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.07);
    & + div {
      opacity: 1;
    }
  }
`;
const Tootip = styled.div`
  position: absolute;
  width: max-content;
  left: 50%;
  bottom: 0px;
  font-size: 0.8rem;
  transform: translateX(-50%) translateY(110%);
  transition: all step-end 0s 0s;
  opacity: 0;
  background: #202124;
  color: white;
  border-radius: 5px;
  padding: 3px 10px;
`;

export default function Button({
  size = "10",
  onClick,
  tooltip = "",
  children,
}) {
  return (
    <Wrapper>
      <StyledButton size={size} onClick={onClick}>
        {children}
      </StyledButton>
      {tooltip !== "" ? <Tootip>{tooltip}</Tootip> : null}
    </Wrapper>
  );
}
