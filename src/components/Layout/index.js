import React from "react";
import styled from "styled-components";
import { media } from "../../lib/style-utils";
import Header from "./Header";
import SideBar from "./SideBar";

const Wrapper = styled.div`
  padding-top: 70px;
`;

const Layout = ({ layout, handleMenuClick, children }) => {
  const { sidebar } = layout;
  return (
    <Wrapper>
      <Header handleMenuClick={handleMenuClick} />
      <Layout.Main>
        <Layout.Nav>
          <SideBar sidebar={sidebar} />
        </Layout.Nav>

        <Layout.Content>{children}</Layout.Content>
      </Layout.Main>
    </Wrapper>
  );
};

Layout.Main = styled.div`
  display: flex;
`;

Layout.Content = styled.div`
  margin-top: 2rem;
  width: 100%;
  transition: all 0.3s;
`;

Layout.Nav = styled.div``;

export default Layout;
