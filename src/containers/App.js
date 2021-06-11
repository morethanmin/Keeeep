import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import WriteMemo from "./WriteMemo";

export default function App() {
  return (
    <Layout>
      <Header />
      <Layout.Main>
        <WriteMemo />
      </Layout.Main>
    </Layout>
  );
}
