import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solidBlack = defineStyle({
  bg: 'app.black.dark',
  color: 'white',
  rounded: 'lg'
});

const outlineBlack = defineStyle({
  bg: 'white',
  border: '2px',
  color: 'app.black.dark',
  borderColor: 'app.black.dark',
  rounded: 'lg',
  _hover: {
    color: 'white',
    bg: 'app.black.dark'
  }
});

export const buttonTheme = defineStyleConfig({
  variants: { solidBlack, outlineBlack }
});