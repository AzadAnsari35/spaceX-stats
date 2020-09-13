import React from "react";
import Routes from "./routes";
import store from "./store/createStore";
import { Provider } from "react-redux";
import MuiTheme from "./theme/muiTheme";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={MuiTheme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
