import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const filledGray = defineStyle({
  border: '2px',
  borderColor: 'white',
  bg: 'app.gray.light3',
  color: 'app.gray.dark',
  fontWeight: '600',
  _hover: {bg: 'app.gray.light2'},
  _focus: {bg: 'none', borderColor: 'app.gray.light2'}
});

const outlineGray = defineStyle({
  border: '2px',
  borderColor: 'app.gray.dark',
  color: 'app.black.light'
});

export const textareaTheme = defineStyleConfig({
  variants: { filledGray, outlineGray }
});