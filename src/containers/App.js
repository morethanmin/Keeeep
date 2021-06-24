import Label from "pages/label";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router";
import Layout from "../components/Layout";
import Index from "../pages";
import * as uiActions from "../modules/ui";
export default function App() {
  const dispatch = useDispatch();

  const layout = useSelector((state) => state.ui.layout);

  const handleMenuClick = () => {
    dispatch(uiActions.toggleMenu());
  };
  return (
    <Layout layout={layout} handleMenuClick={handleMenuClick}>
      <Route path="/" exact component={Index} />
      <Route path="/label" component={Label} />
    </Layout>
  );
}
