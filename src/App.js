import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SessionProvider } from "@inrupt/solid-ui-react";
import Login from "./components/login/Login";
import Fetch from "./components/fetch/Fetch";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Navbar from "./components/navbar/Navbar";
import Redirect from "./components/redirect/Redirect";
import GiveAccess from "./components/access/GiveAccess";
import FetchAccess from "./components/access/FetchAccess";
import Upload from "./components/upload/Upload";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <Router>
      <div className="wd-main-container">
        <SessionProvider sessionId="wd-pxl-demo">
          <Navbar />

          <div style={{ height: "100%" }}>
            <Routes>
              <Route path="*" element={<Navigate to="/login" />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/redirect" element={<Redirect />}></Route>
              <Route path="/app" element={<ProtectedRoute />}>
                <Route path="/app/fetch" element={<Fetch />}></Route>
                <Route path="/app/giveAccess" element={<GiveAccess />}></Route>
                <Route path="/app/access" element={<FetchAccess />}></Route>
                <Route path="/app/upload" element={<Upload />}></Route>
                <Route path="/app/profile" element={<Profile />}></Route>
              </Route>
            </Routes>
          </div>
        </SessionProvider>
      </div>
    </Router>
  );
}

export default App;
