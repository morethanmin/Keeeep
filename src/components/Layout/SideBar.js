import { useHistory } from "react-router-dom";
import React from "react";
import { MdMenu, MdLabelOutline } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { BiBell, BiArchiveIn } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";

import styled, { css } from "styled-components";

const path = "/";
const activated = false;
const sideBarData = [
  {
    name: "메모",
    ico: <AiOutlineBulb />,
    path: "/",
  },
  {
    name: "라벨이름",
    ico: <MdLabelOutline />,
    path: "/label",
  },
  {
    name: "라벨 수정",
    ico: <HiOutlinePencil />,
    path: "",
  },
  {
    name: "보관처리",
    ico: <BiArchiveIn />,
    path: "",
  },
  {
    name: "휴지통",
    ico: <FaRegTrashAlt />,
    path: "",
  },
];

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  color: #5f6368;

  button {
    border: none;
    display: flex;
    align-items: center;
    padding: 13px;
    justify-content: center;
    background: white;
    color: #5f6368;
    font-size: 1.5rem;
    border-radius: 50%;
  }

  //각각의 Menu
  > div {
    padding: 0px 10px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    display: flex;
    align-items: center;

    > * {
      flex-shrink: 0;
      margin-right: 20px;
    }
    //name 폰트 사이즈
    font-size: 0.9rem;
  }

  ${({ activated }) =>
    activated
      ? css`
          width: 250px;
          > div {
            &:hover {
              background: #f1f3f4;
              button {
                background: #f1f3f4;
              }
            }
          }
          > div > div {
            display: block;
          }
        `
      : css`
          > div > button {
            &:hover {
              background: #f1f3f4;
            }
          }
          > div > div {
            display: none;
          }
        `}
`;

const Item = styled.div`
  ${({ selected }) =>
    selected
      ? css`
          background: #feefc3 !important;
          color: black;
          button {
            background: #feefc3 !important;
          }
        `
      : css``}

  ${({ activated }) =>
    activated
      ? css``
      : css`
          background: white !important;
        `}
`;

export default function SideBar() {
  const history = useHistory();

  return (
    <Nav activated={activated}>
      {sideBarData.map((data, idx) => (
        <Item
          key={idx}
          onClick={() => {
            history.push(data.path);
          }}
          activated={activated}
          selected={path === data.path}
        >
          <button>{data.ico}</button>
          <div>{data.name}</div>
        </Item>
      ))}
    </Nav>
  );
}
