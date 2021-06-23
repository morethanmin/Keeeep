import styled from "styled-components";
import oc from "open-color";
const WhiteBox = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0.7rem 1rem;
  background: white;
  color: ${oc.gray[6]};
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.17), 0 2px 6px rgba(0, 0, 0, 0.37);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  cursor: text;

  border-radius: 10px;
`;

export default WhiteBox;
