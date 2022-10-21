import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import FormPage from "./pages/FormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
