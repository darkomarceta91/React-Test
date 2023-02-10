import "./App.css";
import Header from "./components/Header";
import CreateForm from "./components/CreateForm";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndividualData from "./components/IndividualData";
import LoginPage from "./components/LoginPage";
function App() {
  return (
    <Router>
      <div className="body">
        <Header></Header>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/" element={<Home></Home>} />
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
