import "./App.css";
import CreateForm from "./components/CreateForm";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndividualData from "./components/IndividualData";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <div className="body">
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>}></Route>
          <Route path="/home" element={<Home></Home>} />
          <Route path="/createuser" element={<CreateForm></CreateForm>}></Route>
          <Route
            path="/data/:id"
            element={<IndividualData></IndividualData>}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
