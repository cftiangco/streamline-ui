import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from './pages/register';
import {PrivateRoute} from './components/RouteUtil';



function App() {

  return (
    <div className="bg-gray-100">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />

          <Route path="/login" element={
              <Login />
          } />

          <Route path="/register" element={
            <Register />
          } />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
