import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />}>
          </Route>
          <Route path="/referred" element={<Page2/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
