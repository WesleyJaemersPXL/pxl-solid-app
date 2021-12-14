import { Box } from "@mui/system";
import { useState } from "react";
import FetchForm from "./FetchForm";
import CustomBackdrop from "../backdrop/CustomBackdrop.js";
import FetchEmbed from "./FetchEmbed";

const Fetch = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  return (
    <Box sx={{ p: "1rem" }}>
      <Box sx={{ mb: "1rem" }}>
        <FetchForm setFile={setFile} setLoading={setLoading} />
      </Box>

      {!loading ? (
        <>{file && <FetchEmbed file={file.content} />}</>
      ) : (
        <CustomBackdrop title="Fetching the file" />
      )}
    </Box>
  );
};

export default Fetch;
