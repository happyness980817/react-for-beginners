import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (<Router>
    <Routes>
      <Route Route path="/movie/:id" element={<Detail />}> 
      </Route>
      <Route path="/" element={<Home />}> 
      </Route> 
    </Routes>
  </Router>);
} // :id -> id = parameter, send user to "/movie/id"
// Route means link
// Routes = Switch
// renders component inside element = {}
//  

export default App;