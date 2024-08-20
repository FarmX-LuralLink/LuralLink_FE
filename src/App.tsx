import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/homepage";
import SalePage from "../src/pages/salepage";
import CreatePage from "./pages/createpage";
import UploadPage from "./pages/uploadpage";
import ExamplePage from "./pages/examplepage";
import DetailPage from "./pages/detailpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DetailPage/>}/>
        <Route path="/sale" element={<SalePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/upload" element={<UploadPage/>}/>
        <Route path="/airesult" element={<ExamplePage/>}/>
      </Routes>
    </Router>
    
  );
}
export default App;
