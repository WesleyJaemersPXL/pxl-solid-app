import { useSession } from "@inrupt/solid-ui-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { session, sessionRequestInProgress } = useSession();

  if (sessionRequestInProgress) return <div>Loading ...</div>;

  return session.info.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
