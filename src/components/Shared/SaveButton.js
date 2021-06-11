import styled from "styled-components";
import oc from "open-color";
import React from "react";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  text-align: right;
`;

const Button = styled.div`
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${oc.indigo[7]};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: ${oc.gray[1]};
  }
  &:active {
    background: ${oc.gray[2]};
  }
`;

const SaveButton = ({ onClick }) => (
  <Wrapper>
    <Button onClick={onClick}>완료</Button>
  </Wrapper>
);

SaveButton.propTypes = {
  onClick: PropTypes.func,
};

export default SaveButton;
