import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(237, 194, 123, 0.40)",
    boxShadow:
      "0 1px 1px rgba(0,0,0,.11), 0 2px 2px rgba(0,0,0,.11), 0 4px 4px rgba(0,0,0,.11)",
    borderRadius: 4,
    padding: 30,
    cursor: "pointer",
    minHeight: 110,
    "&:hover": {
      background: "rgba(237, 194, 123, 0.60)",
      transition: " all 0.3s ease-in-out",
    },
  },
  title: {
    fontSize: 24,
    paddingBottom: 20,
  },

  detail: {
    fontSize: 14,
  },

  right: {
    fontSize: 12,
    fontStyle: "italic",
    "& *": {
      padding: "4px 0px",
    },
  },
  manufacturer: {
    display: "flex",
    alignItems: "center",
  },
  nationality: {
    display: "flex",
    alignItems: "center",
  },
  type: {
    display: "flex",
    alignItems: "center",
    "& a:first-child": {
      paddingLeft: 0,
    },
    "& a": {
      color: "black",
      padding: "0px 6px",
      display: "flex",
      alignItems: "center",
    },
    "& a:last-child img": {
      width: 18,
    },
  },
}));
