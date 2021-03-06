
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Dashboard />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
