import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import AddNews from "./pages/addnews/AddNews";
import EditNews from "./pages/editnews/EditNews";
import WrongInfo from "./pages/wronginfo/WrongInfo";
import GetNews from "./pages/getnews/GetNews";
import { Context } from "./context/Context";
import { useContext } from "react";
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/addnews" element={<AddNews />} />
        <Route
          path="/editnews/:id"
          element={user ? <EditNews /> : <Register />}
        />
        <Route path="/getnews/:author" element={<GetNews />} />
        <Route path="/wrongInfo" element={<WrongInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
