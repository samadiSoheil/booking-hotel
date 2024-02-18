import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header";
import LocationList from "./components/locationList/LocationList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<LocationList />} />
      </Routes>
      {/* <LocationList /> */}
    </>
  );
}

export default App;
