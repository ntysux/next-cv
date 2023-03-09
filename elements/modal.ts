import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'rgba(73, 71, 75, 0.34)'
  },
  dialog: {
    mx: 2,
    rounded: '2xl',
    boxShadow: 'none'
  },
  body: {
    p: 2
  }
});

export const modalTheme = defineMultiStyleConfig({ baseStyle });