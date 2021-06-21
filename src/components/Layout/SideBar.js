import Button from "components/Shared/Button";
import React from "react";
import { MdMenu, MdLabelOutline } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { BiBell, BiArchiveIn } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";

import styled, { css } from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  color: #5f6368;

  > div > div {
    display: none;
  }

  ${({ activated }) =>
    activated
      ? css`
          width: 250px;
          > div {
            background: transparent;
          }
          > div > div {
            display: block;
          }
        `
      : null}
`;

const Item = styled.div`
  padding: 0px 10px;

  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  background: ${({ selected }) => (selected ? "#feefc3" : "transparent")};

  > * {
    flex-shrink: 0;
    margin-right: 20px;
  }
  div {
    font-size: 0.9rem;
  }
  &:hover {
    background: ${({ selected }) => (selected ? "#feefc3" : "#f1f3f4")};
  }

  > button {
    border: none;
    display: flex;
    align-items: center;
    padding: 13px;
    justify-content: center;
    background: white;
    color: #5f6368;
    font-size: 1.5rem;
    border-radius: 50%;

    background: ${({ selected }) => (selected ? "#feefc3" : "transparent")};
  }
`;

export default function SideBar() {
  return (
    <Nav activated={false}>
      <Item selected={true}>
        <button>
          <AiOutlineBulb />
        </button>
        <div>메모</div>
      </Item>
      <Item selected={false}>
        <button>
          <MdLabelOutline />
        </button>
        <div>메모</div>
      </Item>
      <Item selected={false}>
        <button>
          <HiOutlinePencil />
        </button>
        <div>메모</div>
      </Item>
      <Item selected={false}>
        <button>
          <BiArchiveIn />
        </button>
        <div>메모</div>
      </Item>
      <Item selected={false}>
        <button>
          <IoTrashOutline />
        </button>
        <div>메모</div>
      </Item>
    </Nav>
  );
}
