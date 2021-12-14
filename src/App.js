import React from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
