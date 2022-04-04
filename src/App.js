import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import DashBoard from "./Components/Dashboard/DashBoard";
import NotFound from "./Components/ErrorNotFound/NotFound";
import Home from "./Components/Home/Home";
import MoreShoes from "./Components/MoreShoes/MoreShoes";
import Navbar from "./Components/Navbar/Navbar";
import ReviewPage from "./Components/ReviewPage/ReviewPage";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/moreshoes" element={<MoreShoes></MoreShoes>}></Route>
        <Route path="/reviews" element={<ReviewPage></ReviewPage>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
