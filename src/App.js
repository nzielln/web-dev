//Libraries
import "./libraries/bootstrap/css/bootstrap-grid.min.css";
import "./libraries/bootstrap/bootstrap.min.css";

//Components
import './App.css';
import HelloWorld from "./components/labs/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter/index";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreScreen from "./components/tuiter/ExplorerScreen/ExploreScreen";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen";
import ProfileScreen from "./components/tuiter/ProfileScreen";
import ProfileEditor from "./components/tuiter/ProfileEditor";

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid pt-3">
              <Routes>
                  <Route path="/">
                      <Route index element={<Labs/>}/>
                      <Route path="labs" exact={true} element={<Labs/>}/>
                      <Route path="hello"
                             element={<HelloWorld/>}/>
                      <Route path="tuiter"
                             element={<Tuiter/>}>
                          <Route index
                                 element={<HomeScreen/>}/>
                          <Route path="explore"
                                 element={<ExploreScreen/>}/>
                          <Route path="profile"
                                 element={<ProfileScreen/>}/>
                          <Route path="edit-profile"
                                 element={<ProfileEditor/>}/>
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
