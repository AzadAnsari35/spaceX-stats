import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px 80px",
    position: "relative",
  },
  heading: {
    textAlign: "center",
    paddingBottom: 20,
  },
  search: {
    top: 32,
    position: "absolute",
    right: 80,
    "& .MuiInputBase-root": {
      color: "#edc27b",
    },
    "& .MuiFormLabel-root": {
      color: "#edc27b",
    },
  },
}));
