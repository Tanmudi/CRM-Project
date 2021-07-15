import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./pages/Home/Home";
import Leads from "./pages/Leads/Leads";
import CreateLead from "./pages/CreateLead/CreateLead";
import UpdatePage from "./pages/UpdatePage/UpdatePage";
import View from "./pages/View/View";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/leads">
            <Leads />
          </Route>
          <Route  path="/createleads">
            <CreateLead />
          </Route>
          <Route path="/update/:id">
            <UpdatePage />
          </Route>
          <Route path="/view">
            <View />
          </Route>
        </Switch>
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
