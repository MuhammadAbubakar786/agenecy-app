import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AgenceyDetails from './Pages/AgenceyDetails'
import UserReview from './Pages/UserReview'
export default function App() {
  return (
    <Router>
        <Routes>
       <Route path="/" element={<AgenceyDetails />}></Route>
       <Route path="/Review" element={<UserReview />}></Route>
        </Routes>
    </Router>
  )
}
