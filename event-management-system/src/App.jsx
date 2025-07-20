import LandingPage from "./LandingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import RegisterClient from "./RegisterClient";
import RegisterOrganizer from "./RegisterOrganizer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register/client" element={<RegisterClient/>} />
        <Route path="/register/organizer" element={<RegisterOrganizer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
