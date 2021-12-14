import { Box } from "@mui/system";
import { useState } from "react";
import FetchAccessForm from "./FetchAccessForm";
import FetchAccessTable from "./FetchAccessTable";
import CustomBackDrop from "../backdrop/CustomBackdrop";

const FetchAccess = () => {
  const [accesses, setAccesses] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <Box sx={{ p: "1rem" }}>
      <Box sx={{ mb: "1rem" }}>
        <FetchAccessForm setLoading={setLoading} setAccesses={setAccesses} />
      </Box>

      {loading ? (
        <CustomBackDrop title="Loading access" />
      ) : (
        <>{accesses.length > 0 && <FetchAccessTable accesses={accesses} />}</>
      )}
    </Box>
  );
};

export default FetchAccess;
