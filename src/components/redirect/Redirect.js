import { useSession } from "@inrupt/solid-ui-react";
import { Navigate } from "react-router-dom";
import CustomBackdrop from "../backdrop/CustomBackdrop.js";

const Redirect = () => {
  const { sessionRequestInProgress } = useSession();

  if (sessionRequestInProgress) return <CustomBackdrop title="Logging in" />;

  return <Navigate to="/app/upload" />;
};

export default Redirect;
