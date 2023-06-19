import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Error404Page from "./page/Error/404";
import UserProfile from "./page/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/error/404" element={<Error404Page/>}></Route>
      <Route path="/users/:id" element={<UserProfile/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
