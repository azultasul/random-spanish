import { Route, Routes } from 'react-router-dom';

import Home from "./routes/Home";
import Community from "./routes/Community";
import Mypage from "./routes/Mypage";

function App() {
  return (
    <main>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </main>
  );
}

export default App;
