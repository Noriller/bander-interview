import { extendTheme } from "@chakra-ui/react";

const config = {
  // initialColorMode: "dark",
  // useSystemColorMode: false,
};

export const theme = extendTheme({
  colors: {
    primary: '#171717',
    secondary: '#444444',
    contrast: '#DA0037',
    complementary: '#EDEDED',
  },
  config,
  styles: {
    global: {
      body: {
        bg: 'primary',
        color: 'complementary'
      },
    }
  }
});