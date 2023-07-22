import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AgenceyDetails from './Pages/AgenceyDetails'
import UserReview from './Pages/UserReview'
import Home from "./Pages/Home";
export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Review" element={<UserReview />}></Route>
        </Routes>
    </Router>
  )
}
