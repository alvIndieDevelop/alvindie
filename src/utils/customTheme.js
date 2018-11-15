import { createMuiTheme } from "@material-ui/core";

const customTheme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography: {
    // 'Ubuntu Condensed', sans-serif
    fontFamily: "'Ubuntu Mono', monospace",
    h1: {
      fontFamily: " 'Ubuntu Condensed', sans-serif"
    },
    h2: {
      fontFamily: " 'Ubuntu Condensed', sans-serif"
    },
    h3: {
      fontFamily: " 'Ubuntu Condensed', sans-serif"
    },
    h4: {
      fontFamily: " 'Ubuntu Condensed', sans-serif"
    },
    h5: {
      fontFamily: " 'Ubuntu Condensed', sans-serif"
    },
    h6: {
      fontFamily: " 'Ubuntu Condensed', sans-serif"
    }
  }
});

export default customTheme;
