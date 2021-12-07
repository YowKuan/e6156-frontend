import logo from './logo.svg';
import './App.css';
import CreateDraft from './pages/CreateDraft'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import {Switch, Route, Redirect} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="App">
          <Switch>
            <Route exact path='/create_draft' render={(props) => <CreateDraft/>} />
            <Redirect from='/' to='/create_draft' />
          </Switch>
        </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
