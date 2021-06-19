import oc from "open-color";
import React from "react";
import styled, { css } from "styled-components";
import {
  IoIosMenu,
  IoIosSearch,
  IoIosPaper,
  IoMdRefresh,
  IoMdSettings,
} from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

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
  padding: 0px 20px;
  z-index: 5;

  /* 색상 */
  background: white;
  color: #5f6368;
  border-bottom: 1px solid #d9dce0;

  /* 폰트 */
  font-size: 1.4rem;
  font-weight: 300;
  svg {
    font-size: 1.6rem;
  }

  * {
    font-family: "Nanum Gothic", sans-serif;

    display: flex;
    align-items: center;
  }
`;

const LeftBox = styled.div`
  > * {
    margin-right: 15px;
  }
  padding-right: 60px;
`;

const Menu = styled.div`
  svg {
    font-size: 1.6rem;
  }
`;

const Logo = styled.div`
  svg {
    color: #fbbc04;
    font-size: 2.2rem;
    margin-right: 10px;
  }
`;

const MiddleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    margin: 0px 10px;
  }
`;

const SettingBox = styled.div`
  > svg {
    margin: 0px 10px;
  }
`;

const Search = styled.form`
  display: flex;
  align-items: center;
  background: #f1f3f4;
  border-radius: 10px;
  width: 100%;
  max-width: 722px;
  height: 46px;
  margin: 0px 10px;
  > * {
    margin-left: 15px;
  }
  > svg {
    font-size: 1.5rem;
  }
  > input {
    width: 100%;
    border-radius: 10px;
    margin-right: 15px;
    outline-style: none;
    background: #f1f3f4;
    border: none;
    padding: 11px 0px;

    font-size: 1rem;
    font-weight: 300;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:focus-within {
    background: white;
    > input {
      background: white;
    }
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

const RightBox = styled.div`
  padding-left: 30px;
`;

const Profile = styled.div`
  background: #5f6368;
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 0.8rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  margin-left: 20px;
`;

export default function Header() {
  return (
    <Wrapper>
      <LeftBox>
        <Menu>
          <IoIosMenu />
        </Menu>
        <Logo>
          <IoIosPaper />
          <div>Keep</div>
        </Logo>
      </LeftBox>
      <MiddleBox>
        <Search>
          <IoIosSearch />
          <input type="text" placeholder="검색" />
        </Search>
        <SettingBox>
          <IoMdRefresh />
          <IoMdSettings />
        </SettingBox>
      </MiddleBox>
      <RightBox>
        <CgMenuGridO />
        <Profile>상민</Profile>
      </RightBox>
    </Wrapper>
  );
}
