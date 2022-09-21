import React, { useState } from 'react';

import Layout from "./layout/Layout";
import Router from "./components/Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Layout>
      <Router isLoggedIn={isLoggedIn} />
    </Layout>
  );
}

export default App;
