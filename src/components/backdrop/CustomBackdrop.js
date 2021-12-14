import { Backdrop, CircularProgress } from "@mui/material";

const CustomBackdrop = ({ title }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
      open={true}
    >
      <div>{title} ...</div>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default CustomBackdrop;
