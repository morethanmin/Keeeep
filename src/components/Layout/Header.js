import oc from "open-color";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* 레이아웃 */
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 5;

  /* 색상 */
  background: white;
  color: #5f6368;
  border-bottom: 1px solid #d9dce0;

  /* 폰트 */
  /* font-family: "Baloo", cursive; */
  font-size: 1.8rem;
  font-weight: 300;
`;
export default function Header() {
  return (
    <Wrapper>
      <div>Keep</div>
      <div>검색</div>
      <div>tools</div>
    </Wrapper>
  );
}
