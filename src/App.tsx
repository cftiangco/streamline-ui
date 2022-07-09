import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {

  return (
    <div className="bg-gray-100">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={
            <Home />
          } />

          <Route path="/login" element={
            <Login />
          } />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
