import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Attendance from "./pages/Attendance";
import Visiting from "./pages/Visiting";

import axios from 'axios';
import PrivateRoute from "./routes/PrivateRoute";
import MasterLayout from "./layout/MasterLayout";

axios.defaults.baseURL = "http://workab.sakataguna-dev.com/";
axios.defaults.headers.post['Content-Type'] = 'appilaction/json';
axios.defaults.headers.post['Accept'] = 'appilaction/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/attendance">
          <Attendance />
        </Route>
        <Route path="/visiting">
          <Visiting />
        </Route> */}

        <Route exact path="/" component={ Home } />
        <Route exact path="/login">
          { localStorage.getItem("token") ? <Redirect to="/user/dashboard"/> : <Login/> }
        </Route>
        {/* <Route path="/user" name="User" render={ (props) => <MasterLayout { ...props }/> }/> */}

        <PrivateRoute path="/user" name="user"/>
      </Switch>
    </Router>
  );
}
