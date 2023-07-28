import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import AgencyList from "./Pages/AgencyList";
import UserReview from "./Pages/UserReview";
import AgencyDetails from "./Pages/AgencyDetails";
import Header from "./Sections/Header/Header";
import CreateAgency from "./Pages/CreateAgency";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AgencyList />}></Route>
          <Route path="/AgencyDetails" element={<AgencyDetails />}></Route>
          <Route path="/Review" element={<UserReview />}></Route>
          <Route path="/create-agency" element={<CreateAgency />}></Route>
        </Routes>
          
      </BrowserRouter>
    </>
  );
}
