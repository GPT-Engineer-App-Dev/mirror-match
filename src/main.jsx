import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a202c", // Dark background color
    800: "#2d3748", // Slightly lighter dark color for contrast
    700: "#4a5568", // Even lighter dark color for elements like buttons
  },
  text: {
    light: "#f7fafc", // Light text color
    muted: "#a0aec0", // Muted light text color for secondary text
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: "brand.900",
        color: "text.light",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
