import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: "4px solid #edc27b",
    position: "sticky",
    top: 0,
    width: "100%",
    color: "white",
  },
  container: {
    display: "flex",
    alignItems: "center",
    padding: "15px 30px",
  },
  title: {
    flexGrow: 1,
    "& img": {
      width: 250,
    },
  },
  active: {
    "&:before": {
      width: "100% !important",
    },
  },
  links: {
    "& a": {
      textDecoration: "none",
      color: "white",
      margin: "0px 20px",
      position: "relative",
      padding: "2px 0px",
    },

    "& a:before": {
      content: '""',
      position: "absolute",
      background: "#edc27b",
      bottom: -2,
      height: 2,
      left: 0,
      width: 0,
      transition: " all 0.3s ease-in-out",
    },
    "& a:hover:before": {
      width: "100%",
    },
  },
}));
