import { Card, CardContent, Typography } from "@mui/material";

const FetchEmbed = ({ file }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="div">
          File content
        </Typography>
        <Typography variant="overline" display="block" marginBottom="1rem">
          The file content will be displayed in the box below
        </Typography>
        <embed
          src={file}
          width="100%"
          height="800px"
          style={{ border: "1px solid lightgrey" }}
        ></embed>
      </CardContent>
    </Card>
  );
};

export default FetchEmbed;
