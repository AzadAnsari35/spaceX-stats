import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#edc27b",
    },
    secondary: {
      main: green[500],
    },
  },

  typography: {
    fontFamily: "Orbitron",
  },
});

export default theme;
