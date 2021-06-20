import React from "react";
import styled from "styled-components";
import { media } from "../../lib/style-utils";

const Wrapper = styled.div`
  padding-top: 70px;
`;
const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;

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
