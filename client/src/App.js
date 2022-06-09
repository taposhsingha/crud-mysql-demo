import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import AddNews from "./pages/addnews/AddNews";
import EditNews from "./pages/editnews/EditNews";
import WrongInfo from "./pages/wronginfo/WrongInfo";
import GetNews from "./pages/getnews/GetNews";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addnews" element={<AddNews />} />
        <Route path="/editnews/:id" element={<EditNews />} />
        <Route path="/getnews/:author" element={<GetNews/>}/>
        <Route path="/wrongInfo" element={<WrongInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
