import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ApartmentsPage } from "../pages/ApartmentsPage";
import { TheProjectPage } from "../pages/TheProjectPage";
import { LocationPage } from "../pages/LocationPage";
import { ContactsPage } from "../pages/ContactsPage";
import { Layout } from "../components/Layout/Layout";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route path="/project" element={<TheProjectPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
  );
}

export default App;