import Label from "pages/label";
import { Route } from "react-router";
import Layout from "../components/Layout";
import Index from "../pages";

export default function App() {
  return (
    <Layout>
      <Route path="/" exact component={Index} />
      <Route path="/label" component={Label} />
    </Layout>
  );
}
