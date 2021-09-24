import Layout from './components/layout/Layout'
import { Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import List from './pages/List';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/list' exact>
          <List/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;