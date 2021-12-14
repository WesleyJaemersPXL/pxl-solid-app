import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LogoutButton, useSession } from "@inrupt/solid-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { session, sessionRequestInProgress } = useSession();

  if (!session.info.isLoggedIn || sessionRequestInProgress) return <> </>;

  const onLogout = () => {};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: "flex" }}
            >
              PXL Solid App
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
                component={Link}
                to="/app/upload"
              >
                Upload
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to="/app/fetch"
              >
                Fetch a file
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to="/app/giveAccess"
              >
                Give Access
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to="/app/access"
              >
                Access
              </Button>

              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to="/app/profile"
              >
                Profile
              </Button>
            </Box>
          </Box>

          <LogoutButton onLogout={onLogout}>
            <Button color="inherit">Log Out</Button>
          </LogoutButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
