import { useSession } from "@inrupt/solid-ui-react";
import { Alert, Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SaveIcon from "@mui/icons-material/Save";
import fileService from "../../services/FileService";
import accessService from "../../services/AccessService";
import CustomBackdrop from "../backdrop/CustomBackdrop";

const Upload = () => {
  const { session } = useSession();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    const baseUrl = session.info.webId.split("/profile")[0];
    const url = `${baseUrl}/pxl/uploads/${file.name}`;

    fileService
      .uploadFile(file, url, session.fetch)
      .then((response) => {
        accessService
          .createAclForFile(url, session.info.webId, session.fetch)
          .then((response) => {
            setError(null);
            setSuccess(true);
          });
      })
      .catch((err) => {
        setError(`Something went wrong: ${err.message}`);
        setSuccess(false);
      })
      .finally(() => setLoading(false));
  };

  const fileChangeHandler = (event) => {
    setSuccess(false);
    setFile(event.target.files[0]);
  };

  return (
    <Box sx={{ p: "1rem" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="div">
            Upload a file
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
              mb: "1rem",
            }}
          >
            <Typography variant="body1" display="block">
              Your file will be stored at:{" "}
            </Typography>
            <Typography variant="body1" display="inline" fontWeight="bold">
              {file ? (
                <>
                  {" "}
                  {`${session?.info?.webId?.split("/profile")[0]}/pxl/uploads/${
                    file?.name
                  }`}
                </>
              ) : (
                <>- To be determined -</>
              )}
            </Typography>
          </Box>

          {error && (
            <Box sx={{ width: "100%" }}>
              <Alert sx={{ mb: "1.5rem" }} severity="error">
                {error}
              </Alert>
            </Box>
          )}

          {success && (
            <Box sx={{ width: "100%" }}>
              <Alert sx={{ mb: "1.5rem" }} severity="success">
                File uploaded !
              </Alert>
            </Box>
          )}

          <form onSubmit={onSubmit}>
            {file && (
              <Typography variant="overline" display="block">
                The following file is ready to be uploaded to your pod:{" "}
                <Typography
                  variant="overline"
                  display="inline"
                  fontWeight="bold"
                >
                  {file.name}
                </Typography>
              </Typography>
            )}

            <Button
              variant="contained"
              component="label"
              color="secondary"
              endIcon={<FileUploadIcon />}
            >
              Upload {file && "new"} File
              <input type="file" hidden onChange={fileChangeHandler} />
            </Button>

            {file && (
              <Button
                sx={{ width: "100%", mt: "1rem" }}
                variant="contained"
                type="submit"
                endIcon={<SaveIcon />}
              >
                Save in pod
              </Button>
            )}
          </form>
        </CardContent>
      </Card>

      {loading && <CustomBackdrop title="Uploading the file" />}
    </Box>
  );
};

export default Upload;
