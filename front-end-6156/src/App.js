import './App.css';
import CreateDraft from './pages/CreateDraft'
import Draft from './pages/Draft'
import Result from './pages/Result'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import {Switch, Route, Redirect} from "react-router-dom";
import DraftTable from './pages/DraftTable';
import Cookies from 'js-cookie'
import axios from 'axios';
import {useHistory, withRouter } from "react-router-dom";


function App() {
  //const baseURL = "https://8npd3qciag.execute-api.us-east-1.amazonaws.com/demo/api/login"
  const baseURL = "https://cu-fantasy.auth.us-east-1.amazoncognito.com/login?client_id=1c5m1dkc43amhvr10bjf1jrqsr&response_type=code&scope=aws.cognito.signin.user.admin&redirect_uri=https://baseball.cu-fantasy.com/"
  Cookies.set('cookie_name', 'value')
  console.log(Cookies.get('cookie_name'))

  // function loginFunc(){
  //   axios.get(baseURL).then((response)=>{
  //     console.log(response)
  //     if (response.status === 200){
  //       console.log(response)

  //     }   
  //   }).catch(error => {
  //     console.log(error)
  //     return error
  //   });

  // }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="App">
          <Switch>
            <Route exact path='/create_draft' render={(props) => <CreateDraft/>} />
            <Route exact path='/draft' render={(props) => <Draft/>} />
            <Route exact path='/draft_table' render={(props) => <DraftTable/>} />
            <Route path="/login"></Route>
            <Route path='/result' render={(props) => <Result/>} />

            <Route path="/draft/:id"></Route>
            <Route path="/draft/:id" component={DraftTable}></Route>
            {/* <Route path="/draft/:id" render={(props) => <DraftTable/>}></Route> */}
            <Redirect from='/' to='/create_draft' />
          </Switch>
        </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
