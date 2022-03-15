//Libraries
import "./libraries/bootstrap/css/bootstrap-grid.min.css";
import "./libraries/bootstrap/bootstrap.min.css";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";


//Components
import './App.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";

function App() {
  return (
      <Router>
          <div className="container-fluid">
             <Routes>
                 <Route path="/hello"
                        exact={true}
                        element={<HelloWorld/>}/>

                 {/*Declare default path using path="/"*/}
                 <Route path="/"
                        exact={true}
                        element={<Labs/>}/>
                 <Route path="/tuiter"
                        exact={true}
                        element={<Tuiter/>}/>
            </Routes>
          </div>
      </Router>
  );
}

export default App;
