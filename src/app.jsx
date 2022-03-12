import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./Pages/Game";
import HomePage from "./Pages/Home";
import './css/App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="game" element={<GamePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
