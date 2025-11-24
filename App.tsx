import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/theme";
import AppRouter from "./src/routes/Route";

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}