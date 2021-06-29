import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  overflow: visible;

  z-index: 9999;
  width: max-content;
  left: 50%;
  bottom: 0px;
  font-size: 0.8rem;
  transform: translateX(-50%) translateY(110%);
  transition: all step-end 0s 0s;
  visibility: hidden;
  background: #202124;
  color: white;
  border-radius: 5px;
  padding: 3px 10px;
`;

export default function Tooltip({ content }) {
  return <Wrapper>{content}</Wrapper>;
}
