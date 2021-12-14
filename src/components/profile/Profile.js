import { useSession } from "@inrupt/solid-ui-react";
import { Alert, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import profileService from "../../services/ProfileService";
import CustomBackdrop from "../backdrop/CustomBackdrop";

const Profile = () => {
  const { session } = useSession();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profileInfo, setProfileInfo] = useState(null);

  useEffect(() => {
    console.log("FETCHING");
    if (session.info.webId) {
      setLoading(true);

      profileService
        .fetchProfile(session.info.webId, session.fetch)
        .then((response) => {
          setProfileInfo(response);
          setError(null);
        })
        .catch((err) => {
          setProfileInfo(null);
          setError("Could not fetch your profile");
        })
        .finally(() => setLoading(false));
    }
  }, [session, setLoading, setProfileInfo]);

  return (
    <Box sx={{ p: "1rem" }}>
      {loading ? (
        <CustomBackdrop title="Fetching your profile" />
      ) : (
        <>
          <Card>
            <CardContent>
              <Typography variant="h4" component="div">
                Profile
              </Typography>
              <Typography
                variant="overline"
                display="block"
                marginBottom="1rem"
              >
                The values below were fetched from your profile
              </Typography>

              {error ? (
                <Box sx={{ width: "100%" }}>
                  <Alert sx={{ mb: "1.5rem" }} severity="error">
                    {error}
                  </Alert>
                </Box>
              ) : (
                <>
                  {profileInfo && (
                    <>
                      {profileInfo.name && (
                        <Typography
                          variant="overline"
                          display="block"
                          marginBottom="1rem"
                        >
                          Name:{" "}
                          <Typography
                            variant="overline"
                            display="inline"
                            marginBottom="1rem"
                            fontWeight="bold"
                          >
                            {profileInfo.name}
                          </Typography>
                        </Typography>
                      )}

                      {profileInfo.emailAddresses?.length > 0 && (
                        <Typography
                          display="flex"
                          variant="overline"
                          gap="1rem"
                          marginBottom="1rem"
                        >
                          Email addresses:{" "}
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {profileInfo.emailAddresses.map((email) => {
                              return (
                                <Typography
                                  key={email}
                                  variant="overline"
                                  display="inline"
                                  marginBottom="1rem"
                                  fontWeight="bold"
                                >
                                  {email}
                                </Typography>
                              );
                            })}
                          </div>
                        </Typography>
                      )}

                      {profileInfo.emailAddresses?.length > 0 && (
                        <Typography
                          display="flex"
                          variant="overline"
                          gap="1rem"
                          marginBottom="1rem"
                        >
                          Addresses:{" "}
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {profileInfo.addresses.map((address) => {
                              return (
                                <Typography
                                  key={address}
                                  variant="overline"
                                  display="inline"
                                  marginBottom="1rem"
                                  fontWeight="bold"
                                >
                                  {address.street +
                                    " " +
                                    address.postalCode +
                                    " " +
                                    address.countryName +
                                    " " +
                                    address.region}
                                </Typography>
                              );
                            })}
                          </div>
                        </Typography>
                      )}
                    </>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </Box>
  );
};

export default Profile;
