import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { buttonTheme } from "@/elements/button";
import { inputTheme } from "@/elements/input";
import { menuTheme } from "@/elements/menu";
import { modalTheme } from "@/elements/modal";
import { accordionTheme } from "@/elements/accordion";
import { textareaTheme } from "@/elements/textarea";

const theme = extendTheme({
  colors: {
    app: {
      black: {
        dark: '#49474B',
        light: '#68666B'
      },
      gray: {
        dark: '#88898C',
        light1: '#D9D9D9',
        light2: '#E0E0E0',
        light3: '#EBEBEB'
      },
      teal: '#5CF2E3'
    }
  },
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    Menu: menuTheme,
    Modal: modalTheme,
    Accordion: accordionTheme,
    Textarea: textareaTheme
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store }>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
