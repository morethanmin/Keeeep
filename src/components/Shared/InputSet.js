import React, { Component, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";

const TitleInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 1rem;
`;

const StyledTextArea = styled(Textarea)`
  width: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-weight: 300;
  font-size: 1rem;
  margin-top: 1rem;
  resize: none;
`;

const InputSet = ({ onChange, title, body }) => {
  const memoRef = useRef();
  useEffect(() => {
    memoRef.current.focus();
  }, []);

  return (
    <div>
      <TitleInput
        name="title"
        onChange={onChange}
        placeholder="제목"
        value={title}
      />
      <StyledTextArea
        ref={memoRef}
        minRows={3}
        maxRows={20}
        placeholder="메모 작성..."
        name="body"
        onChange={onChange}
        value={body}
      />
    </div>
  );
};

export default InputSet;
