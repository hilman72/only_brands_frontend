import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import '../src/Assets/Fonts/Raleway/Raleway-Regular.ttf';
import '../src/Assets/Fonts/MontserratSemiBold/Montserrat-SemiBold.ttf';
import '../src/Assets/Fonts/MontserratRegular/Montserrat-Regular.ttf';
import '../src/Assets/Fonts/PeaceSans/Peace Sans Webfont.ttf';
import '../src/Assets/Fonts/LeagueSpartan/leaguespartan-bold.ttf';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff4c6d",
      light: "#ff829b",
      dark: "#c60042",
    },
    secondary: {
      main: "#8eebdc",
      light: "#c1ffff",
      dark: "#5bb7a9",
    },
  },
  overrides: {
    MuiButton: {
      text: {
        background: '#ff4c6c',
        borderRadius: '15px',
        border: '0.2rem solid #8deadb',
        color: 'white',
        height: '1.8rem',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        fontSize: '0.8rem',
      },
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  </Provider>,



  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
