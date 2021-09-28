import Layout from './components/layout/Layout'
import { Route, Switch} from 'react-router-dom'
import AllDownloads from './pages/AllDownloads';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllDownloads />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;