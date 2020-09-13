import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 74px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  quote: {
    "& > p": {
      fontStyle: "italic",
    },
  },
}));
