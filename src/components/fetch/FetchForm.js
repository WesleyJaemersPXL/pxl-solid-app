import { Controller, useForm } from "react-hook-form";
import HttpIcon from "@mui/icons-material/Http";
import {
  Alert,
  Button,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import fetchService from "../../services/FetchService";
import { useSession } from "@inrupt/solid-ui-react";
import { useState } from "react";

const FetchForm = ({ setLoading, setFile }) => {
  const { session } = useSession();
  const [error, setError] = useState(null);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      resourceUrl: "",
    },
  });

  const handleOnSubmit = (data) => {
    setLoading(true);

    fetchService
      .fetchFile(data.resourceUrl, session.fetch)
      .then((response) => {
        setFile({ resourceUrl: data.resourceUrl, content: response });
        setError(null);
      })
      .catch((err) => {
        setFile(null);
        if (err.statusCode === 404) {
          setError(`Cannot find file at: ${data.resourceUrl} - 404 NOT FOUND`);
        } else {
          setError(`Something went wrong: ${err.message}`);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="div">
          Fetch a file
        </Typography>
        <Typography variant="overline" display="block" marginBottom="1rem">
          Enter the url from the file you wish to fetch
        </Typography>

        {error && (
          <Box sx={{ width: "100%" }}>
            <Alert sx={{ mb: "1.5rem" }} severity="error">
              {error}
            </Alert>
          </Box>
        )}

        <form onSubmit={handleSubmit(handleOnSubmit)}>
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
                      : "Type the URI of the resource you want to fetch"
                  }
                  label="Resource URI"
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

          <Button
            sx={{ width: "100%" }}
            variant="contained"
            type="submit"
            className="wd-full-width"
          >
            Fetch
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FetchForm;
