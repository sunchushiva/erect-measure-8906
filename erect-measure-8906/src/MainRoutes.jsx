import { Route, Routes } from "react-router-dom";
import Home from "./Pages/UserSide/Home";
import Discover from "./Pages/UserSide/Discover";
import LabTest from "./Pages/UserSide/LabTest";
import Login from "./Pages/UserSide/Login";
import Error from "./Pages/UserSide/Error";
import Cart from "./Pages/UserSide/Cart";
import ConsultDoctor from "./Pages/UserSide/ConsultDoctor";
import DoctorComponent3 from "./Components/UserSide/DoctorComponent3";
import Doctorsymptoms from "./Components/UserSide/Doctorsymptoms";
import DoctorFinal from "./Components/UserSide/DoctorFinal";
import Payment from "./Components/UserSide/Payment";
import Register from "./Pages/UserSide/Register";
import FilterPage from "./Components/UserSide/FilterPage";
import PrivateRoute from "./Components/UserSide/PrivateRoute";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/labtest" element={<LabTest />} />
      <Route path="/login" element={<Login />} />
      <Route path="/medicines" element={<FilterPage/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/consultdoctor" element={<ConsultDoctor />} />
      <Route path="/abcd/" element={<PrivateRoute><DoctorComponent3/></PrivateRoute>}/>
      <Route path="/symptoms" element={<Doctorsymptoms/>}/>
      <Route path="/doctor_final" element={<DoctorFinal/>}/>
      <Route path="/doctor_final" element={<DoctorFinal/>}/>
      <Route path="/payment" element={<Payment/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
