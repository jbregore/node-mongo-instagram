import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Login, Home, Profile } from './pages';
import ProtectedRoutes from './utils/routes/ProtectedRoutes';

const App = () => {

  // const [user, setUser] = useState(null);
  const user = localStorage.getItem("profile");
  const token = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!user && !token && (
            <Route path="login" element={<Login />} />
          )}

          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<Navigate to={user && token ? "/home" : "/login"} />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App