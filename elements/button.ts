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

const unstyledGrayHoverWhite = defineStyle({
  bg: 'none',
  color: 'app.gray.dark',
  rounded: 'full',
  _hover: {color: 'white'}
});

const unstyledHoverBgBlack = defineStyle({
  bg: 'none',
  // color: 'app.gray.dark',
  rounded: 'full',
  _hover: {bg: 'app.black.light'}
});

export const buttonTheme = defineStyleConfig({
  variants: {solidBlack, outlineBlack, unstyledGrayHoverWhite, unstyledHoverBgBlack}
});