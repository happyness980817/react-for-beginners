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
      <Route Route path="/movie" element={<Detail />}> 
      </Route>
      <Route path="/" element={<Home />}> 
      </Route>
    </Routes>
  </Router>);
}
// map 사용 시 element 에 key 부여
export default App;