import axios from 'axios'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import "./App.css";
import AppRouter from "./AppRouter";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Sans Condensed", "sans-serif"].join(","),
    color: "#ddd",
    h4: {
      fontSize: "1.8rem",
      fontWeight: 400,
      margin: '0 0 20px 0',
    },
  },
  palette: {
    primary: {
      main: "#40739e",
    },
    secondary: {
      main: "#ff6b6b",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
