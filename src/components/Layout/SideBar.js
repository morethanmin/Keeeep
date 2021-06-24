import { useHistory, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";

const path = "/";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  color: #5f6368;
  cursor: pointer;

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
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100px;

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

export default function SideBar({ sidebar }) {
  const { open, info } = sidebar;
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const handleNavItemClick = (item) => {
    const { type, data } = item;

    switch (type) {
      case "dispatch":
        dispatch(data());
        break;

      default:
        history.push(data);
        break;
    }
  };
  return (
    <Nav activated={open}>
      {info.map((data, idx) => (
        <Item
          key={idx}
          onClick={() => {
            handleNavItemClick(data);
          }}
          activated={open}
          selected={path === data.data}
        >
          <button>{data.ico}</button>
          <div>{data.name}</div>
        </Item>
      ))}
    </Nav>
  );
}
