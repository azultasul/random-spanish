import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Community from "./pages/Community";
import Mypage from "./pages/Mypage";

const Router = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community" element={<Community />} />
      {props.isLoggedIn ? (
        <Route
          path="/login"
          element={<Navigate to="/mypage" replace />}
        />
      ) : (
        <Route
          path="/mypage"
          element={<Navigate to="/login" replace />}
        />
      )}
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<Mypage />} />
    </Routes>
  )
}

export default Router;