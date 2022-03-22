//Libraries
import "./libraries/bootstrap/css/bootstrap-grid.min.css";
import "./libraries/bootstrap/bootstrap.min.css";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";


//Components
import './App.css';
import HelloWorld from "./components/labs/hello-world";
import Labs from "./components/labs/labs";
import Tuiter from "./components/tuiter/tuiter";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/tuiter/ExplorerScreen/ExploreScreen";

function App() {
  return (
      <Router>
          <div className="container-fluid pt-3">
             <Routes>
                 <Route path="/hello"
                        exact={true}
                        element={<HelloWorld/>}/>
                 <Route path="/tuiter"
                        exact={true}
                        element={<Tuiter/>}/>

                 <Route path="/"
                        exact={true}
                        element={<Labs/>}/>
                 <Route path="/tuiter/explore"
                        exact={true}
                        element={<ExploreScreen/>}/>
                 <Route path="/tuiter/home"
                        exact={true}
                        element={<HomeScreen/>}/>
            </Routes>
          </div>
      </Router>
  );
}

export default App;
