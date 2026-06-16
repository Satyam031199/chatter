import { Navigate, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
import { useAuth } from "@clerk/react";
import Loader from "./components/Loader";

function App() {
  const { isLoaded, isSignedIn } = useAuth();
  if(!isLoaded) return <Loader />;
  return (
    <Routes>
      <Route
        path="/"
        element={isSignedIn ? <ChatPage /> : <Navigate to="/auth" replace />}
      />
      <Route
        path="/auth"
        element={!isSignedIn ? <AuthPage /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;
