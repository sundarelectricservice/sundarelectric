import './index.css';
import {useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './routes/Home';
import Inverter from './products/Inverter';
import Contact from './routes/Contact';
import Admin from './routes/Admin';
import SignupComponent from './routes/Signup';
import LoginComponent from './routes/Login';
import Upload from './routes/Upload';
import {useCookies} from "react-cookie";
import ComUps from './products/ComUps';
import IsolationTrans from './products/IsolationTrans';
import LiftInverter from './products/LiftInverter';
import SingleUps from './products/SingleUps';
import SmfBatteries from './products/SmfBatteries';
import ThreeUps from './products/ThreeUps';
import TubularBatteries from './products/TubularBatteries';
import UpsBatteries from './products/UpsBatteries';
import VoltageStabilizer from './products/VoltageStabilizer';
import About from './routes/About';

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  return (
    <div className="w-screen h-screen font-lora">
      <BrowserRouter>
      {cookie.token ? (
         // logged in routes
        <Routes>
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
           <Route
            path="/admin"
            element={<Admin />}
          />
          
          <Route
            path="/upload"
            element={<Upload />}
          />
          <Route
            path="/inverter"
            element={<Inverter />}
          />
          <Route
            path="/commercialups"
            element={<ComUps />}
          />
          <Route
            path="/isolationtransformer"
            element={<IsolationTrans />}
          />
          <Route
            path="/liftinverter"
            element={<LiftInverter />}
          />
          <Route
            path="/singlephaseups"
            element={<SingleUps />}
          />
          <Route
            path="/smfbattery"
            element={<SmfBatteries />}
          />
          <Route
            path="/threephaseups"
            element={<ThreeUps />}
          />
          <Route
            path="/tubularinverterbattery"
            element={<TubularBatteries />}
          />
          <Route
            path="/upsinverterbattery"
            element={<UpsBatteries />}
          />
          <Route
            path="/voltagestablizer"
            element={<VoltageStabilizer />}
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
         ) : (
          // logged out routes
          <Routes>
          <Route
            path="/home"
            element={<Home />}
          />
           <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          // <Route
          //   path="/signup"
          //   element={<SignupComponent />}
          // />
           <Route
            path="/login"
            element={<LoginComponent />}
          />
          <Route
            path="/inverter"
            element={<Inverter />}
          />
          <Route
            path="/commercialups"
            element={<ComUps />}
          />
          <Route
            path="/isolationtransformer"
            element={<IsolationTrans />}
          />
          <Route
            path="/liftinverter"
            element={<LiftInverter />}
          />
          <Route
            path="/singlephaseups"
            element={<SingleUps />}
          />
          <Route
            path="/smfbattery"
            element={<SmfBatteries />}
          />
          <Route
            path="/threephaseups"
            element={<ThreeUps />}
          />
          <Route
            path="/tubularinverterbattery"
            element={<TubularBatteries />}
          />
          <Route
            path="/upsinverterbattery"
            element={<UpsBatteries />}
          />
          <Route
            path="/voltagestablizer"
            element={<VoltageStabilizer />}
          />
          <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
  )}
      </BrowserRouter>
    </div>
  );
}

export default App;
