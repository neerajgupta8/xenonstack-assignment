import SignUp from "./Pages/signup";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Header from "./Components/header";
import Login from "./Pages/login";
import ContactUs from "./Pages/contact_us";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
