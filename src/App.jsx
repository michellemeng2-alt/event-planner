import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Help from "./pages/Help";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Navigation />
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<Register />} />{" "}
          <Route path="/help" element={<Help />} /> {/* Always visible guide */}
          <Route path="/dashboard" element={<Dashboard />} />{" "}{/* Only for logged-in users*/} 
        </Routes>
      </div>
    </>
  );
}
export default App;
