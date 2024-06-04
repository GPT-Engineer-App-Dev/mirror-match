import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#f5f5f5", // Light background color
    800: "#e0e0e0", // Slightly darker light color for contrast
    700: "#cccccc", // Even darker light color for elements like buttons
  },
  text: {
    dark: "#333333", // Dark text color
    muted: "#666666", // Muted dark text color for secondary text
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
