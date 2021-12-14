import { useTheme } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";

const FetchAccessTable = ({ accesses }) => {
  const theme = useTheme();

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="div">
          Access
        </Typography>
        <Typography variant="overline" display="block" marginBottom="1rem">
          In the table below, you will find an overview of the access
        </Typography>
        <table className="wd-table">
          <thead
            style={{
              background: theme.palette.primary.light,
            }}
          >
            <tr>
              <th>WebId</th>
              <th>Read</th>
              <th>Write</th>
              <th>Append</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            {accesses.map((item) => (
              <tr key={item.webId}>
                <td>{item.webId}</td>
                <td>
                  <div className="wd-table-item">
                    {item.access.read ? (
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          background: theme.palette.success.main,
                        }}
                        className="wd-table-true"
                      ></div>
                    ) : (
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          background: theme.palette.error.main,
                        }}
                      ></div>
                    )}
                  </div>
                </td>
                <td>
                  <div className="wd-table-item">
                    {item.access.write ? (
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          background: theme.palette.success.main,
                        }}
                        className="wd-table-true"
                      ></div>
                    ) : (
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          background: theme.palette.error.main,
                        }}
                      ></div>
                    )}
                  </div>
                </td>
                <td>
                  <div className="wd-table-item">
                    {item.access.append ? (
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          background: theme.palette.success.main,
                        }}
                        className="wd-table-true"
                      ></div>
                    ) : (
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          background: theme.palette.error.main,
                        }}
                      ></div>
                    )}
                  </div>
                </td>
                <td>
                  <div className="wd-table-item">
                    {item.access.controlRead && item.access.controlWrite ? (
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          background: theme.palette.success.main,
                        }}
                        className="wd-table-true"
                      ></div>
                    ) : (
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          background: theme.palette.error.main,
                        }}
                      ></div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default FetchAccessTable;
