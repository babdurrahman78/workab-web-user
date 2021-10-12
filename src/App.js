import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Attendance from "./pages/Attendance";
import Visiting from "./pages/Visiting";

export default function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
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
        </Route>
      </Switch>
    </Router>
  );
}
