import {
  Alert,
  Avatar,
  Button,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HttpIcon from "@mui/icons-material/Http";
import { useState } from "react";
import authService from "../../services/AuthService";

const Login = () => {
  const [oidcIssuer, setOidcIssuer] = useState("");
  const [error, setError] = useState(null);

  const handleOidcIssuerChange = (event) => {
    setOidcIssuer(event.target.value);
  };

  const handleLogin = () => {
    authService
      .login(oidcIssuer)
      .then((response) => {})
      .catch((err) => setError(err.message));
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ width: "600px" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: ".5rem 0 .5rem 0", bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography variant="h4" component="div">
            Log in
          </Typography>
          <Typography variant="overline" display="block" marginBottom="1rem">
            Please enter your identity provider url
          </Typography>

          {error && (
            <Box sx={{ width: "100%" }}>
              <Alert sx={{ mb: "1.5rem" }} severity="error">
                {error}
              </Alert>
            </Box>
          )}

          <TextField
            sx={{ width: "100%", mb: "1rem" }}
            label="OIDC issuer IRI"
            value={oidcIssuer}
            onChange={handleOidcIssuerChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HttpIcon />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ background: "orange", width: "100%" }}>
            <Button
              sx={{ width: "100%" }}
              variant="contained"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
