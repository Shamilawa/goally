//Pages and components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from './components/Navbar'
import Dashboard from "./pages/Dashboard";

// importing user auther context
import { useAuthContext } from "./hooks/useAuthContext"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {

  const { user } = useAuthContext()

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
