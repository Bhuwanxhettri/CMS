import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signin from "./pages/auth/Signin";
import Loader from "./component/Loader";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard.view";

const App = () => {
  const isAuthenticated = false;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        {!isAuthenticated && (
          <>
            <Route path="/" exact element={<Login />} />
            <Route path="/signin" exact element={<Signin />} />
          </>
        )}
      </Routes>

      {!isAuthenticated && (
        <>
          <Layout>
            <Routes>
              <Route path="/dashboard" exact element={<Dashboard />} />
            </Routes>
          </Layout>
        </>
      )}
    </>
  );
};

export default App;
