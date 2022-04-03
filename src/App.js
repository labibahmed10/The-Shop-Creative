import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import DashBoard from "./Components/Dashboard/DashBoard";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ReviewPage from "./Components/ReviewPage/ReviewPage";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<ReviewPage></ReviewPage>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
