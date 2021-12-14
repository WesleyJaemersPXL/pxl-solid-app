import { useSession } from "@inrupt/solid-ui-react";
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
import HttpIcon from "@mui/icons-material/Http";
import { Controller, useForm } from "react-hook-form";
import accessService from "../../services/AccessService";
import { useState } from "react";

const FetchAccessForm = ({ setAccesses, setLoading }) => {
  const [error, setError] = useState(null);

  const { session } = useSession();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      resourceUrl: "",
    },
  });

  const onSubmit = (data) => {
    setLoading(true);

    accessService
      .getAccess(data.resourceUrl, session.fetch)
      .then((response) => {
        setAccesses(response);
        setError(null);
      })
      .catch((err) => {
        if (err.statusCode === 404) {
          setError(`Cannot find file at: ${data.resourceUrl} - 404 NOT FOUND`);
        } else {
          setError(`Something went wrong: ${err.message}`);
        }

        setAccesses([]);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="div">
          Fetch Access
        </Typography>
        <Typography variant="overline" display="block" marginBottom="1rem">
          Fill in the url which you want to fetch access for
        </Typography>

        {error && (
          <Box sx={{ width: "100%" }}>
            <Alert sx={{ mb: "1.5rem" }} severity="error">
              {error}
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

          <Button
            sx={{ width: "100%" }}
            variant="contained"
            type="submit"
            className="wd-full-width"
            color="primary"
          >
            Fetch Access
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FetchAccessForm;
