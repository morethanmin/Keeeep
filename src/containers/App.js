import Label from 'pages/label'
import { Route } from 'react-router'
import Index from '../pages'
import Archive from '../pages/archive'
import LayoutContainer from './LayoutContainer'
import LabelViewerContainer from './LabelViewerContainer'
export default function App() {
  return (
    <>
      <LayoutContainer>
        <Route path="/" exact component={Index} />
        <Route path="/archive" component={Archive} />
        <Route path="/label" component={Label} />
      </LayoutContainer>
      <LabelViewerContainer />
    </>
  )
}
