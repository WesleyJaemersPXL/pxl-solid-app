import { Controller, useForm } from "react-hook-form";
import HttpIcon from "@mui/icons-material/Http";
import {
  Button,
  InputAdornment,
  TextField,
  Card,
  CardContent,
  Typography,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import accessService from "../../services/AccessService";
import { useState } from "react";
import { useSession } from "@inrupt/solid-ui-react";
import CustomBackdrop from "../backdrop/CustomBackdrop";

const GiveAccess = () => {
  const [loading, setLoading] = useState(false);
  const { session } = useSession();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      webId: "",
      resourceUrl: "",
      read: false,
      write: false,
      append: false,
      control: false,
    },
  });

  const readChangeHandler = () => {
    setValue("read", !getValues().read);
  };

  const writeChangeHandler = () => {
    setValue("write", !getValues().write);
  };

  const appendChangeHandler = () => {
    setValue("append", !getValues().append);
  };

  const controlChangeHandler = () => {
    setValue("control", !getValues().control);
  };

  const onSubmit = (data) => {
    setLoading(true);

    accessService
      .giveAccessTo(
        data.resourceUrl,
        data.webId,
        {
          read: data.read,
          write: data.write,
          append: data.append,
          controlRead: data.control,
          controlWrite: data.control,
        },
        session.fetch
      )
      .then((response) => {
        setError(null);
        setSuccess(true);
      })
      .catch((err) => {
        if (err.statusCode === 404) {
          setError(`Cannot find file at: ${data.resourceUrl} - 404 NOT FOUND`);
        } else {
          setError(`Something went wrong: ${err.message}`);
        }
        setSuccess(false);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box sx={{ p: "1rem" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="div">
            Give Access
          </Typography>
          <Typography variant="overline" display="block" marginBottom="1rem">
            Please enter the url of the file you wish to share, also give a
            WebId of the profile you want to give access to
          </Typography>

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
                Access granted
              </Alert>
            </Box>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mb: "1rem" }}>
              <Controller
                name="resourceUrl"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    sx={{ width: "100%" }}
                    helperText={
                      fieldState.error
                        ? fieldState.error.message
                        : "Type the url of the resource you want to change access for"
                    }
                    label="Resource Url"
                    error={!!fieldState.error}
                    {...field}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HttpIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                rules={{
                  required: "Provide a valid URI",
                }}
              />
            </Box>

            <Box sx={{ mb: "1rem" }}>
              <Controller
                name="webId"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    sx={{ width: "100%" }}
                    helperText={
                      fieldState.error
                        ? fieldState.error.message
                        : "Type the WebId of the person you want to give access to"
                    }
                    label="WebId"
                    error={!!fieldState.error}
                    {...field}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HttpIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                rules={{
                  required: "Provide a valid URI",
                }}
              />
            </Box>

            <Box sx={{ mb: "1rem" }}>
              <input type="checkbox" name="read" onChange={readChangeHandler} />
              <label htmlFor="read" className="wd-ml-sm">
                Read
              </label>
            </Box>
            <Box sx={{ mb: "1rem" }}>
              <input
                type="checkbox"
                name="write"
                onChange={writeChangeHandler}
              />
              <label htmlFor="write" className="wd-ml-sm">
                Write
              </label>
            </Box>
            <Box sx={{ mb: "1rem" }}>
              <input
                type="checkbox"
                name="append"
                onChange={appendChangeHandler}
              />
              <label htmlFor="append" className="wd-ml-sm">
                Append
              </label>
            </Box>
            <Box sx={{ mb: "1rem" }}>
              <input
                type="checkbox"
                name="control"
                onChange={controlChangeHandler}
              />
              <label htmlFor="control" className="wd-ml-sm">
                Control
              </label>
            </Box>

            <Button
              sx={{ width: "100%" }}
              variant="contained"
              type="submit"
              color="primary"
            >
              Give Access
            </Button>
          </form>
        </CardContent>
      </Card>

      {loading && <CustomBackdrop title="Updating access" />}
    </Box>
  );
};

export default GiveAccess;
