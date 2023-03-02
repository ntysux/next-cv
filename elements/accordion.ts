import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    border: 'none'
  },
  button: {
    w: 'auto',
    fontWeight: '700',
    color: 'app.black.dark',
    _hover: {bg: 'none'}
  },
  panel: {
    p: 4,
    bg: 'white'
  }
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });