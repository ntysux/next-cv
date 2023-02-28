import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "@/elements/button";
import { inputTheme } from "@/elements/input";
import { menuTheme } from "@/elements/menu";
import { modalTheme } from "@/elements/modal";

const theme = extendTheme({
  colors: {
    app: {
      black: {
        dark: '#49474B',
        light: '#68666B'
      },
      gray: {
        dark: '#88898C'
      },
      teal: '#5CF2E3'
    }
  },
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    Menu: menuTheme,
    Modal: modalTheme
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
