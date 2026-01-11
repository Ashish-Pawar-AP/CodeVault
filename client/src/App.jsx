import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerifyEmail from "./pages/auth/VerifyEmail";

import Dashboard from "./pages/dashboard/Dashboard";
import Snippets from "./pages/dashboard/Snippets";
import CreateSnippet from "./pages/dashboard/CreateSnippet";
import EditSnippet from "./pages/dashboard/EditSnippet";
import Collections from "./pages/dashboard/Collections";
import Modules from "./pages/dashboard/Modules";

import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* ---------- PUBLIC ROUTES ---------- */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />

          {/* ---------- PROTECTED ROUTES ---------- */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/snippets"
            element={
              <ProtectedRoute>
                <Dashboard>
                  <Snippets />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/snippets/new"
            element={
              <ProtectedRoute>
                <Dashboard>
                  <CreateSnippet />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          {/* ✅ ADD EDIT ROUTE HERE */}
          <Route
            path="/snippets/edit/:id"
            element={
              <ProtectedRoute>
                <Dashboard>
                  <EditSnippet />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/collections"
            element={
              <ProtectedRoute>
                <Dashboard>
                  <Collections />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/modules"
            element={
              <ProtectedRoute>
                <Dashboard>
                  <Modules />
                </Dashboard>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
