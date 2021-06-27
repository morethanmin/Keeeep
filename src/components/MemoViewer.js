import React from "react";
import { InputSet, SaveButton } from "components/Shared";
import styled from "styled-components";
import oc from "open-color";
import { media } from "lib/style-utils";

import ToolBoxContainer from "containers/ToolBoxContainer";

// 화면을 불투명하게 해줍니다.
const Dimmed = styled.div`
  background: ${oc.gray[3]};
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  position: fixed;
  z-index: 10;
  opacity: 0.5;
`;

const Viewer = styled.div`
  background: white;
  position: fixed;
  height: auto;
  z-index: 15;
  border-radius: 10px;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  ${media.tablet`
        width: calc(100% - 2rem);
    `}
`;

const MemoViewer = ({
  visible,
  memo,
  toolBox: ToolBox,
  onChange,
  onUpdate,
  onClose,
}) => {
  // visible 이 아닐경우엔 아무것도 보여주지 않는다
  if (!visible) return null;
  const { title, body } = memo;
  return (
    <div>
      <Dimmed onClick={onClose} />
      <Viewer>
        <InputSet title={title} body={body} onChange={onChange} />
        <ToolBox memo={memo} type="ui/memo">
          <SaveButton onClick={onUpdate} />
        </ToolBox>
      </Viewer>
    </div>
  );
};

export default MemoViewer;
