import "./App.css";
import Header from "./components/common/Header";
import SubHeader from "./components/common/SubHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <SubHeader />
        <div className="content">
          <Route path="/home/:category" component={Home}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
